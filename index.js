#!/usr/bin/env node

const fs = require("fs");

const args = process.argv.slice(2);
if (args.length === 0) {
    console.error("❌ Error: CSS/SCSS filename required.\nUsage: css-optimize <input.css> [output.css]");
    process.exit(1);
}

const inputFile = args[0];

// ✅ Determine Output File Name
let outputFileMerge;

if (inputFile.includes("-tooptimize")) {
    // ✅ If the filename contains `-tooptimize`, replace it with `.css` or `.scss`
    outputFileMerge = inputFile.replace(/-tooptimize(\.css|\.scss)$/, "$1");
} else if (args[1]) {
    // ✅ If second argument is given, use it as output file
    outputFileMerge = args[1];
} else {
    // ✅ Otherwise, overwrite the same file
    outputFileMerge = inputFile;
}

// ✅ Read CSS File
const readCSS = (filePath) => {
    if (!fs.existsSync(filePath)) {
        console.error(`❌ Error: File not found -> ${filePath}`);
        process.exit(1);
    }
    return fs.readFileSync(filePath, "utf8");
};

// ✅ Function to Extract Plain CSS & @Rules Separately
const separateRulesAndPlainCSS = (css) => {
    let insideRule = false,
        ruleBuffer = "",
        plainBuffer = "",
        ruleSections = [],
        ruleDepth = 0;
    const lines = css.split("\n");

    for (let line of lines) {
        line = line.trim();
        if (line.startsWith("@") && line.includes("{")) {
            insideRule = true;
            ruleDepth = 1;
            ruleBuffer = `${line}\n`;
            continue;
        }

        if (insideRule) {
            ruleBuffer += `${line}\n`;
            if (line.includes("{")) ruleDepth++;
            if (line.includes("}")) ruleDepth--;
            if (ruleDepth === 0) {
                insideRule = false;
                ruleSections.push(ruleBuffer.trim());
                ruleBuffer = "";
            }
        } else {
            plainBuffer += `${line}\n`;
        }
    }

    return { plainCSS: plainBuffer.trim(), rulesCSS: ruleSections };
};

// ✅ Function to Sort & Merge CSS Selectors
const refineCSSSelectors = (css) => {
    const selectorMap = new Map();
    const lines = css.split("\n");
    let currentSelector = null,
        insideBlock = false,
        propertyBuffer = [];

    for (let line of lines) {
        line = line.trim();
        if (line.includes("{")) {
            currentSelector = line.split("{")[0].trim();
            insideBlock = true;
            propertyBuffer = [];
            continue;
        }

        if (insideBlock) {
            if (line.includes("}")) {
                insideBlock = false;
                if (currentSelector) {
                    if (!selectorMap.has(currentSelector)) {
                        selectorMap.set(currentSelector, new Set());
                    }
                    propertyBuffer.forEach((prop) => selectorMap.get(currentSelector).add(prop));
                }
                continue;
            }

            if (line.includes(":") && line.includes(";")) {
                propertyBuffer.push(line.trim());
            }
        }
    }

    const sortedSelectors = [...selectorMap.keys()].sort();
    let outputCSS = "";
    for (const selector of sortedSelectors) {
        const properties = [...selectorMap.get(selector)].sort();
        outputCSS += `${selector} {\n    ${properties.join("\n    ")}\n}\n\n`;
    }
    return outputCSS.trim();
};

// ✅ Function to Process & Sort Selectors Inside `@rules`
const refineRulesCSS = (rules) => {
    return rules
        .map((rule) => {
            const ruleHeader = rule.split("{")[0].trim();
            const ruleContent = rule.substring(rule.indexOf("{") + 1, rule.lastIndexOf("}")).trim();
            const sortedRuleContent = refineCSSSelectors(ruleContent);
            return `${ruleHeader} {\n${sortedRuleContent}\n}`;
        })
        .join("\n\n");
};

// ✅ Save File
const saveToFile = (filePath, content) => {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Saved: ${filePath}`);
};

// ✅ Main Function
const processCSS = () => {
    try {
        const inputCSS = readCSS(inputFile);
        const { plainCSS, rulesCSS } = separateRulesAndPlainCSS(inputCSS);
        const sortedPlainCSS = refineCSSSelectors(plainCSS);
        const sortedRulesCSS = refineRulesCSS(rulesCSS);
        const finalCSS = `${sortedPlainCSS}\n\n${sortedRulesCSS}`;
        saveToFile(outputFileMerge, finalCSS);
        console.log("✅ CSS Optimization Completed!");
    } catch (error) {
        console.error(`❌ Error processing CSS:`, error);
    }
};

// 🚀 Run the Script
processCSS();
