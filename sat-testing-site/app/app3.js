
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var ejs = require("ejs");
var nodemailer = require("nodemailer");
var fs = require('fs');
var pdf = require("html-pdf");

var jsonParser = bodyParser.json()
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('views'));

fileSystem = require('fs'),
path = require('path');
app.set("view engine", "ejs");
 
var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://andrewwooten:CrimsonRussia17@ds029675.mlab.com:29675/crimsontest";
/*var resultArray = {
    student: {
                        firstName: "Andrew",
                        lastName: "Wooten",
                        email: "andrew_wooten@mac.com"
    },
    answers: {
                        READING: { 1: "A", 2: "B", 3: "C", 4: "32.5", 5: "A", 6: "B", 7: "C", 8: "32.5", 9: "A", 10: "B", 11: "C", 12: "32.5", 13: "A", 14: "B", 15: "C", 16: "32.5", 17: "A", 18: "B", 19: "C", 20: "32.5", 21: "A", 22: "B", 23: "C", 24: "32.5", 25: "A", 26: "B", 27: "C", 28: "32.5", 29: "A", 30: "B", 31: "C", 32: "32.5", 33: "A", 34: "B", 35: "C", 36: "32.5", 37: "A", 38: "B", 39: "C", 40: "32.5", 41: "A", 42: "B", 43: "C", 44: "32.5", 45: "A", 46: "B", 47: "C", 48: "32.5", 49: "A", 50: "B", 51: "C", 52: "32.5"},
                        WRITING: { 1: "A", 2: "B", 3: "C", 4: "32.5", 5: "A", 6: "B", 7: "C", 8: "32.5", 9: "A", 10: "B", 11: "C", 12: "32.5", 13: "A", 14: "B", 15: "C", 16: "32.5", 17: "A", 18: "B", 19: "C", 20: "32.5", 21: "A", 22: "B", 23: "C", 24: "32.5", 25: "A", 26: "B", 27: "C", 28: "32.5", 29: "A", 30: "B", 31: "C", 32: "32.5", 33: "A", 34: "B", 35: "C", 36: "32.5", 37: "A", 38: "B", 39: "C", 40: "32.5", 41: "A", 42: "B", 43: "C", 44: "32.5"},
                        MATHNC: { 1: "A", 2: "B", 3: "C", 4: "32.5", 5: "A", 6: "B", 7: "C", 8: "32.5", 9: "A", 10: "B", 11: "C", 12: "32.5", 13: "A", 14: "B", 15: "C", 16: "32.5", 17: "A", 18: "B", 19: "C", 20: "32.5", 21: "A"}  ,
                        MATHWC: { 1: "A", 2: "B", 3: "C", 4: "32.5", 5: "A", 6: "B", 7: "C", 8: "32.5", 9: "A", 10: "B", 11: "C", 12: "32.5", 13: "A", 14: "B", 15: "C", 16: "32.5", 17: "A", 18: "B", 19: "C", 20: "32.5", 21: "A", 22: "B", 23: "C", 24: "32.5", 25: "A", 26: "B", 27: "C", 28: "32.5", 29: "A", 30: "B", 31: "C", 32: "32.5", 33: "A", 34: "B", 35: "C", 36: "32.5", 37: "A"}
 
    },
    testInfo: {
                       date: {day: 12, month: 3, year: 2017},
                       time: {hours: 21, minutes: 32},
                       tutorID: "3842"
    },
    userID: "432482"
};*/
//debug
	var jsonArray =  {'READING': {'42': {'questionType': 'Ideas', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Intent/Purpose', 'subCategory': ''}, '48': {'questionType': 'Infer/Imply/Suggest', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Comprehension', 'subCategory': 'Inference'}, '43': {'questionType': 'General Question', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Intent/Purpose', 'subCategory': ''}, '49': {'questionType': 'Command of Evidence', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Comprehension', 'subCategory': 'Inference'}, '52': {'questionType': 'Ideas', 'studentAnswer': '', 'correctAnswer': 'A', 'skillCategory': 'Relationships', 'subCategory': ''}, '24': {'questionType': 'Infer/Imply/Suggest', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Big Picture', 'subCategory': ''}, '25': {'questionType': 'Words in Context', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Vocabulary', 'subCategory': ''}, '26': {'questionType': 'Rhetoric', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Literacy', 'subCategory': ''}, '27': {'questionType': 'Ideas', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Relationships', 'subCategory': ''}, '20': {'questionType': 'Charts and Graphs', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Use of Evidence', 'subCategory': 'Data interpretation'}, '21': {'questionType': 'Charts and Graphs', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Use of Evidence', 'subCategory': 'Data interpretation'}, '22': {'questionType': 'Infer/Imply/Suggest', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Comprehension', 'subCategory': ''}, '23': {'questionType': 'Command of Evidence', 'studentAnswer': '', 'correctAnswer': 'A', 'skillCategory': 'Use of Evidence', 'subCategory': ''}, '46': {'questionType': 'Command of Evidence', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Big Picture', 'subCategory': 'Extraction'}, '47': {'questionType': 'Words in Context', 'studentAnswer': '', 'correctAnswer': 'A', 'skillCategory': 'Vocabulary', 'subCategory': ''}, '44': {'questionType': 'Words in Context', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Vocabulary', 'subCategory': ''}, '45': {'questionType': 'Specific Detail', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Big Picture', 'subCategory': 'Extraction'}, '28': {'questionType': 'Rhetoric', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Rhetoric', 'subCategory': 'Devices'}, '29': {'questionType': 'Dual Passages', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Big Picture', 'subCategory': ''}, '40': {'questionType': 'Ideas', 'studentAnswer': '', 'correctAnswer': 'A', 'skillCategory': 'Comprehension', 'subCategory': 'Interpretation'}, '41': {'questionType': 'Command of Evidence', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Comprehension', 'subCategory': 'Interpretation'}, '1': {'questionType': 'General Question', 'studentAnswer': '', 'correctAnswer': 'A', 'skillCategory': 'Big Picture', 'subCategory': 'Main Idea'}, '3': {'questionType': 'Rhetoric', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Rhetoric', 'subCategory': 'Shift in Focus'}, '2': {'questionType': 'General Question', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Intent/Purpose', 'subCategory': ''}, '5': {'questionType': 'Specific Detail', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Comprehension', 'subCategory': 'Inference'}, '4': {'questionType': 'Rhetoric', 'studentAnswer': '', 'correctAnswer': 'A', 'skillCategory': 'Rhetoric', 'subCategory': 'Word Choice'}, '7': {'questionType': 'Command of Evidence', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Comprehension', 'subCategory': 'Inference'}, '6': {'questionType': 'Specific Detail', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Comprehension', 'subCategory': 'Inference'}, '9': {'questionType': 'Words in Context', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Vocabulary', 'subCategory': ''}, '8': {'questionType': 'Rhetoric', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Rhetoric', 'subCategory': 'Devices'}, '51': {'questionType': 'Ideas', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Big Picture', 'subCategory': 'Synthesis'}, '39': {'questionType': 'Words in Context', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Vocabulary', 'subCategory': ''}, '38': {'questionType': 'Infer/Imply/Suggest', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Comprehension', 'subCategory': 'Inference'}, '11': {'questionType': 'General Question', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Big Picture', 'subCategory': 'Main Idea'}, '10': {'questionType': 'Command of Evidence', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Comprehension', 'subCategory': 'Interpretation'}, '13': {'questionType': 'Command of Evidence', 'studentAnswer': '', 'correctAnswer': 'A', 'skillCategory': 'Intent/Purpose', 'subCategory': ''}, '12': {'questionType': 'Ideas', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Intent/Purpose', 'subCategory': ''}, '15': {'questionType': 'General Question', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Relationships', 'subCategory': ''}, '14': {'questionType': 'Words in Context', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Vocabulary', 'subCategory': ''}, '17': {'questionType': 'Infer/Imply/Suggest', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Relationships', 'subCategory': ''}, '16': {'questionType': 'Words in Context', 'studentAnswer': '', 'correctAnswer': 'A', 'skillCategory': 'Vocabulary', 'subCategory': ''}, '19': {'questionType': 'Charts and Graphs', 'studentAnswer': '', 'correctAnswer': 'A', 'skillCategory': 'Use of Evidence', 'subCategory': 'Data interpretation'}, '18': {'questionType': 'General Question', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Organization', 'subCategory': ''}, '31': {'questionType': 'Dual Passages', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Dual Passages', 'subCategory': ''}, '30': {'questionType': 'Dual Passages', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Dual Passages', 'subCategory': 'Relationship'}, '37': {'questionType': 'Specific Detail', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Relationships', 'subCategory': ''}, '36': {'questionType': 'Command of Evidence', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Comprehension', 'subCategory': 'Understanding'}, '35': {'questionType': 'Specific Detail', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Comprehension', 'subCategory': 'Understanding'}, '34': {'questionType': 'Rhetoric', 'studentAnswer': '', 'correctAnswer': 'A', 'skillCategory': 'Rhetoric', 'subCategory': 'Stylistic Elements'}, '33': {'questionType': 'General Question', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Big Picture', 'subCategory': ''}, '32': {'questionType': 'Command of Evidence', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Use of Evidence', 'subCategory': ''}, '50': {'questionType': 'Charts and Graphs', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Use of Evidence', 'subCategory': 'Data'}}, 'MATHNC': {'11': {'questionType': 'General Question: Single Step', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Number Properties', 'subCategory': 'Understanding of Rational/Irrational numbers'}, '10': {'questionType': 'General Question: Single Step', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Linear Equations', 'subCategory': 'Linear Inequalities'}, '13': {'questionType': 'General Question: Single Step', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Algebra', 'subCategory': 'Polynomials'}, '12': {'questionType': 'General Question: Single Step', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Algebra', 'subCategory': 'Advanced Algebra-rearranging equations'}, '15': {'questionType': 'General Question: Single Step', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Algebra', 'subCategory': 'Intermediate Algebra'}, '14': {'questionType': 'Word Problem ', 'studentAnswer': '', 'correctAnswer': 'A', 'skillCategory': 'Understanding Equations', 'subCategory': 'Making Functions from Word Problems'}, '17': {'questionType': 'General Question: Single Step', 'studentAnswer': '', 'correctAnswer': '19', 'skillCategory': 'Algebra', 'subCategory': 'Polynomials'}, '16': {'questionType': 'Word Problem', 'studentAnswer': '', 'correctAnswer': '3, 6, 9', 'skillCategory': 'Understanding Equations', 'subCategory': 'Solving Functions from Word Problems'}, '19': {'questionType': 'General Question: Multi Step', 'studentAnswer': '', 'correctAnswer': '6', 'skillCategory': 'Geometry', 'subCategory': 'Angles and Circles'}, '18': {'questionType': 'General Question: Single Step', 'studentAnswer': '', 'correctAnswer': '12', 'skillCategory': 'Geometry', 'subCategory': 'Geometry'}, '20': {'questionType': 'General Question: Multi Step', 'studentAnswer': '', 'correctAnswer': '0.25', 'skillCategory': 'Understanding Equations', 'subCategory': 'Linear System of Equations'}, '1': {'questionType': 'General Question: Single Step', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Algebra', 'subCategory': 'Elementary Algebra'}, '3': {'questionType': 'Word Problem', 'studentAnswer': '', 'correctAnswer': 'A', 'skillCategory': 'Understanding Equations', 'subCategory': 'System of '}, '2': {'questionType': 'General Question: Single Step', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Understanding Equations', 'subCategory': 'Linear Equations'}, '5': {'questionType': 'General Question: Single Step', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Algebra', 'subCategory': 'Advanced Algebra-rationals'}, '4': {'questionType': 'General Question: Single Step', 'studentAnswer': '', 'correctAnswer': 'A', 'skillCategory': 'Algebra', 'subCategory': 'Polynomials'}, '7': {'questionType': 'General Question: Multi Step', 'studentAnswer': '', 'correctAnswer': 'A', 'skillCategory': 'Exponents', 'subCategory': 'Properties of exponents'}, '6': {'questionType': 'General Question: Single Step', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Data Interpretation', 'subCategory': 'Intepreting graphs of linear functions'}, '9': {'questionType': 'General Question: Multi Step', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Linear Equations', 'subCategory': 'Linear Functions'}, '8': {'questionType': 'General Question: Multi Step', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Geometry', 'subCategory': 'Geometry'}}, 'MATHWC': {'24': {'questionType': 'Charts and Graphs', 'studentAnswer': '', 'correctAnswer': 'A', 'skillCategory': 'Understanding Equations', 'subCategory': 'Circle Equation'}, '25': {'questionType': 'Charts and Graphs', 'studentAnswer': '', 'correctAnswer': 'A', 'skillCategory': 'Understanding Equations', 'subCategory': 'Understanding Slope'}, '26': {'questionType': 'Charts and Graphs', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Understanding Equations', 'subCategory': 'Interpret Graphs and Choose I, II, III'}, '27': {'questionType': 'Charts and Graphs', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Data Interpretation', 'subCategory': 'Interpret Graphs '}, '20': {'questionType': 'Charts and Graphs', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Statistics', 'subCategory': 'Probability'}, '21': {'questionType': 'Word Problem', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Understanding Equations', 'subCategory': 'Make Functions out of Word Problems; Inequalities'}, '22': {'questionType': 'General Question: Single Step', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Algebra', 'subCategory': 'Elementary Algebra: Make an Equation with variables'}, '23': {'questionType': 'Word Problem', 'studentAnswer': '', 'correctAnswer': 'A', 'skillCategory': 'Statistics', 'subCategory': 'Probability/Fractions'}, '28': {'questionType': 'Charts and Graphs', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Data Interpretation', 'subCategory': 'Make Equation from Graph'}, '29': {'questionType': 'General Question: Single Step', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Understanding Equations', 'subCategory': 'System of Equations, understanding of #solutions'}, '1': {'questionType': 'Word Problem', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Understanding Equations', 'subCategory': 'Make Functions out of Word Problems'}, '3': {'questionType': 'Word Problem', 'studentAnswer': '', 'correctAnswer': 'A', 'skillCategory': 'Algebra', 'subCategory': 'Elementary Algebra'}, '2': {'questionType': 'Word Problem', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Understanding Equations', 'subCategory': 'Solve Functions from Word Problems'}, '5': {'questionType': 'Word Problem', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Understanding Equations', 'subCategory': 'Solve Functions from Word Problems-Percentages'}, '4': {'questionType': 'Word Problem', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Understanding Equations', 'subCategory': 'Solve Functions from Word Problems'}, '7': {'questionType': 'Charts and Graphs', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Understanding Equations', 'subCategory': 'Properties of Parabolic Functions'}, '6': {'questionType': 'Follow the Path', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Algebra', 'subCategory': 'Elementary Algebra'}, '9': {'questionType': 'Word Problem', 'studentAnswer': '', 'correctAnswer': 'A', 'skillCategory': 'Understanding Equations', 'subCategory': 'Make Functions out of Word Problems'}, '8': {'questionType': 'Word Problem', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Algebra', 'subCategory': 'Intermediate Algebra'}, '38': {'questionType': 'Word Problem', 'studentAnswer': '', 'correctAnswer': '7500', 'skillCategory': 'Understanding Equations', 'subCategory': 'Solve Functions from Word Problems'}, '11': {'questionType': 'Charts and Graphs', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Data Interpretation', 'subCategory': 'Interpret Table/Solve Functions from Table'}, '10': {'questionType': 'General Question: Single Step', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Algebra', 'subCategory': 'Nested Functions'}, '13': {'questionType': 'Word Problem', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Statistics', 'subCategory': 'Statistics'}, '12': {'questionType': 'Word Problem', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Understanding Equations', 'subCategory': 'Make Functions out of Word Problems'}, '15': {'questionType': 'Word Problem', 'studentAnswer': '', 'correctAnswer': 'A', 'skillCategory': 'Understanding Equations', 'subCategory': 'Solve Functions from Word Problems'}, '14': {'questionType': 'Charts and Graphs', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Data Interpretation', 'subCategory': 'Interpret a Scatterplot'}, '17': {'questionType': 'Word Problem', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Statistics', 'subCategory': 'Percentages'}, '16': {'questionType': 'Charts and Graphs', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Data Interpretation', 'subCategory': 'Interpret Table/Fractions'}, '19': {'questionType': 'Charts and Graphs', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Statistics', 'subCategory': 'Median'}, '18': {'questionType': 'Word Problem', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Statistics', 'subCategory': 'Statistics'}, '31': {'questionType': 'Word Problem', 'studentAnswer': '', 'correctAnswer': '14', 'skillCategory': 'Understanding Equations', 'subCategory': 'Solve Functions from Word Problems'}, '30': {'questionType': 'General Question: Multi Step', 'studentAnswer': '', 'correctAnswer': 'A', 'skillCategory': 'Geometry', 'subCategory': 'Geometry'}, '37': {'questionType': 'General Question: Single Step', 'studentAnswer': '', 'correctAnswer': '3284', 'skillCategory': 'Algebra', 'subCategory': 'Advanced Algebra'}, '36': {'questionType': 'General Question: Multi Step', 'studentAnswer': '', 'correctAnswer': '32', 'skillCategory': 'Geometry', 'subCategory': 'Geometry'}, '35': {'questionType': 'Word Problem', 'studentAnswer': '', 'correctAnswer': '15', 'skillCategory': 'Understanding Equations', 'subCategory': 'Solve Functions from Word Problems'}, '34': {'questionType': 'Word Problem', 'studentAnswer': '', 'correctAnswer': '105', 'skillCategory': 'Understanding Equations', 'subCategory': 'Solve Functions from Word Problems'}, '33': {'questionType': 'General Question: Single Step', 'studentAnswer': '', 'correctAnswer': '11', 'skillCategory': 'Algebra', 'subCategory': 'Polynomials'}, '32': {'questionType': 'General Question: Single Step', 'studentAnswer': '', 'correctAnswer': '7', 'skillCategory': 'Algebra', 'subCategory': 'Intermediate Algebra'}}, 'WRITING': {'42': {'questionType': 'Logic & Reasoning', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Organization', 'subCategory': 'Flow'}, '43': {'questionType': 'Relevance', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Organization', 'subCategory': 'Placement of evidence'}, '24': {'questionType': 'Command of Evidence', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Use of Evidence', 'subCategory': 'Data'}, '25': {'questionType': 'Revision: Effective Use of Language', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Organization', 'subCategory': 'Flow'}, '26': {'questionType': 'Relevance', 'studentAnswer': '', 'correctAnswer': 'A', 'skillCategory': 'Organization', 'subCategory': 'Reasoning'}, '27': {'questionType': 'Revision: Grammar & Punctuation', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Mechanics: Grammar & Punctuation', 'subCategory': 'Punctuation'}, '20': {'questionType': 'Revision: Effective Use of Language', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Mechanics: Effective Use of Language', 'subCategory': 'Subject-Verb Agreement'}, '21': {'questionType': 'Revision: Grammar & Punctuation', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Mechanics: Grammar & Punctuation', 'subCategory': 'Logical Comparison '}, '22': {'questionType': 'Logic & Reasoning', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Organization', 'subCategory': 'Logical sequence'}, '23': {'questionType': 'Revision: Grammar & Punctuation', 'studentAnswer': '', 'correctAnswer': 'A', 'skillCategory': 'Mechanics: Grammar & Punctuation', 'subCategory': 'Modifier Placement'}, '44': {'questionType': 'Revision: Effective Use of Language', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Mechanics: Effective Use of Language', 'subCategory': 'Redundancy'}, '28': {'questionType': 'Words in Context', 'studentAnswer': '', 'correctAnswer': 'A', 'skillCategory': 'Mechanics: Effective Use of Language', 'subCategory': 'Tone'}, '29': {'questionType': 'Revision: Grammar & Punctuation', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Mechanics: Grammar & Punctuation', 'subCategory': 'Possessives'}, '40': {'questionType': 'Revision: Effective Use of Language', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Mechanics: Effective Use of Language', 'subCategory': 'Items in a Series'}, '41': {'questionType': 'Revision: Effective Use of Language', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Mechanics: Effective Use of Language', 'subCategory': 'Concision'}, '1': {'questionType': 'Revision: Grammar & Punctuation', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Mechanics: Grammar & Punctuation', 'subCategory': 'Consistency'}, '3': {'questionType': 'Revision: Grammar & Punctuation', 'studentAnswer': '', 'correctAnswer': 'A', 'skillCategory': 'Mechanics: Grammar & Punctuation', 'subCategory': 'Plural Agreement'}, '2': {'questionType': 'Revision: Effective Use of Language', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Mechanics: Effective Use of Language', 'subCategory': 'Precision'}, '5': {'questionType': 'Revision: Effective Use of Language', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Mechanics: Effective Use of Language', 'subCategory': 'Concision'}, '4': {'questionType': 'Relevance', 'studentAnswer': '', 'correctAnswer': 'A', 'skillCategory': 'Organization', 'subCategory': 'Reasoning'}, '7': {'questionType': 'Revision: Effective Use of Language', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Mechanics: Effective Use of Language', 'subCategory': 'Sentence Structure'}, '6': {'questionType': 'Revision: Grammar & Punctuation', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Mechanics: Grammar & Punctuation', 'subCategory': 'Parallel Structure'}, '9': {'questionType': 'Logic & Reasoning', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Organization', 'subCategory': 'Logical sequence '}, '8': {'questionType': 'Revision: Effective Use of Language', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Mechanics: Effective Use of Language', 'subCategory': 'Redundancy '}, '39': {'questionType': 'Revision: Grammar & Punctuation', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Mechanics: Grammar & Punctuation', 'subCategory': 'Pronoun Agreement'}, '38': {'questionType': 'Revision: Effective Use of Language', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Comprehension', 'subCategory': 'Fundamental English'}, '11': {'questionType': 'Introductions & Conclusions', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Organization', 'subCategory': 'Conclusion'}, '10': {'questionType': 'Revision: Effective Use of Language', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Mechanics: Effective Use of Language', 'subCategory': 'Tone'}, '13': {'questionType': 'Revision: Grammar & Punctuation', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Mechanics: Grammar & Punctuation', 'subCategory': 'Punctuation'}, '12': {'questionType': 'Revision: Effective Use of Language', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Organization', 'subCategory': 'Flow '}, '15': {'questionType': 'Relevance', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Organization', 'subCategory': 'Reasoning'}, '14': {'questionType': 'Revision: Grammar & Punctuation', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Mechanics: Grammar & Punctuation', 'subCategory': 'Possessives '}, '17': {'questionType': 'Command of Evidence', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Use of Evidence', 'subCategory': ''}, '16': {'questionType': 'Revision: Grammar & Punctuation', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Mechanics: Grammar & Punctuation', 'subCategory': 'Punctuation'}, '19': {'questionType': 'Revision: Effective Use of Language', 'studentAnswer': '', 'correctAnswer': 'A', 'skillCategory': 'Mechanics: Effective Use of Language', 'subCategory': 'Stylistic Patterns'}, '18': {'questionType': 'Summarizing and Paraphrasing', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Organization', 'subCategory': 'Logical sequence'}, '31': {'questionType': 'Relevance', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Organization', 'subCategory': 'Logical sequence'}, '30': {'questionType': 'Revision: Grammar & Punctuation', 'studentAnswer': '', 'correctAnswer': 'C', 'skillCategory': 'Mechanics: Grammar & Punctuation', 'subCategory': 'Pronoun Clarity '}, '37': {'questionType': 'Command of Evidence', 'studentAnswer': '', 'correctAnswer': 'A', 'skillCategory': 'Use of Evidence', 'subCategory': ''}, '36': {'questionType': 'Words in Context', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Vocabulary', 'Category': 'Depth'}, '35': {'questionType': 'Revision: Grammar & Punctuation', 'studentAnswer': '', 'correctAnswer': 'A', 'skillCategory': 'Mechanics: Grammar & Punctuation', 'subCategory': 'Punctuation'}, '34': {'questionType': 'Words in Context', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Organization', 'subCategory': 'Flow'}, '33': {'questionType': 'Revision: Grammar & Punctuation', 'studentAnswer': '', 'correctAnswer': 'D', 'skillCategory': 'Mechanics: Grammar & Punctuation', 'subCategory': 'Sentence Structure'}, '32': {'questionType': 'Revision: Effective Use of Language', 'studentAnswer': '', 'correctAnswer': 'B', 'skillCategory': 'Mechanics: Effective Use of Language', 'subCategory': 'Precision'}}};


var tutorid;

var options = { 
    "border": {
        "top": "30px",            // default is 0, units: mm, cm, in, px 
        "bottom": "30px"
    }
};

app.get("/diagnostic/?:tutorid", function (request, response) {
  tutorid = request.params["tutorid"];
  var userid = Math.floor(Math.random()*1000000)
  response.render('index', {tutorid : tutorid, userid : userid});
});
 
 
app.post('/send_json', jsonParser, function (request, response) {
 
    // if(!request.body) return response.sendStatus(400);
    // get data from form
	// console.log(request.body);
	var jsonRequest = Object.keys(request.body);
	// console.log(jsonRequest[0]);
	var resultArray = JSON.parse(jsonRequest[0]);
	// resultArray.testInfo.tutorID = "3842";
	// console.log(resultArray.testInfo.tutorID); 
    var databaseStructure = resultArray;
    var copy_of_student_answers = resultArray.answers
    // var exportAnswers = require("exportFromCSV.js");
    databaseStructure.answers = jsonArray;
    // console.log(databaseStructure);
 
 
    Object.keys(databaseStructure.answers).forEach(function(key){
        Object.keys(databaseStructure.answers[key]).forEach(function(key2) {
            //console.log(key+key2)
            //console.log(copy_of_student_answers[key][key2])
            databaseStructure.answers[key][key2].studentAnswer = copy_of_student_answers[key][key2]
         }
         );
    });
    //console.log(databaseStructure);
    //console.log(databaseStructure.answers.READING)

    //find tutor
	mongoClient.connect(url, function(err, db){
	
    	if(err){
            return console.log(err);
        }
    	//actions with mongodb
    	var collection = db.collection("tutor");
    	var id = databaseStructure.testInfo.tutorID;
    	collection.find({ID: id}).toArray(function(err, results){
    		// console.log(results);
    		// console.log(databaseStructure.testInfo.tutor);
    		databaseStructure.testInfo.tutorID = results;
    		// console.log(results);
    		// console.log(databaseStructure.testInfo.tutor);
    		
        })	
    	db.close();
    });
	// console.log(databaseStructure);

    //upload results
    mongoClient.connect(url, function(err, db){
	
    	if(err){
    		console.log(err);
    	}
        

    	db.collection("user04").insertOne(databaseStructure, function(err, result){
            if(err){ 
                console.log(err); 
            } 
            db.collection("user04").find(), function(err,result){
                if(err){
                    console.log(err);
                }
            }
        });

    	//console.log(user.testInfo);
    	db.close();
        //console.log("yo");
        //added code
        
     
    });

});

app.get('/report/?:userid', function(req, res){
    res.render('thankyou');
    setTimeout(function(){
        userid = parseInt(req.params['userid']);
        mongoClient.connect(url, function(err,db){
            if (err){
            console.log("3")
                console.log(err);
            } else {
                var answers = db.collection("user04").find({'userID':userid}).toArray(function(err, result){
                    if(err){
                        console.log(err);
                    } else {
                console.log(result);
                    //this prints the results
                        if(result[0]){
                            createReport(result[0]);
                        } else {
                            res.render('404');
                        }
                        db.close();
                    }
                });
                
            }
        });
    }, 10000); 
    
    


function createReport(results){
    var email = results.student.email;
    var generatedReport = convert(results);
    var compiled = ejs.compile(fs.readFileSync('./views/report.ejs', 'utf8'));
    var html = compiled({data: generatedReport});
    if (10 > 1) {
	console.log("inside");
        var transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                                user: 'crimsontest@crimsoneducation.org',
                                pass: 'crimsontest17'
                            }
                        });
	console.log("inside");
	if (3 > 2) {
	pdf.create(html, options).toFile('Report.pdf', function(err, res) {
		if (err) return console.log(err);
		else console.log("report generated");
	var mailOptions = {
                            from: 'crimsontest@crimsoneducation.org',
                            to: email,
                            bcc: 'm.lee@crimsoneducation.org',
                            subject: 'Your SAT Test Result',
                            text: 'Dear ' + results.student.firstName + ' ' + results.student.secondName + ',\n\n Congratulations on completing the Crimson Diagnostic SAT Test. Please find your results attached below.\n\nSincerely, \nThe Crimson Education Team\n\n',
                            attachments: [{
                                filename: 'Report_' + results.student.firstName + '_' + results.student.secondName + '.pdf',
                                path: 'Report.pdf',
                                contentType: 'application/pdf'
                                }], function (err, info) {
                                        if( err) {
						console.log("2");
                                            console.error(err);
                                            res.send(err);
                                        }
                                        else {
                                            console.log(info);
                                            res.send(info);
                                        }
                                    }
                        };
	console.log("before send");
			if (4 > 3) {

                        transporter.sendMail(mailOptions, function(error, info){
                            if (error) {
				console.log("1");
                                console.log(error);
                            } else {
                                console.log('Email sent: ' + info.response);
                            }
                        });}


	});}
	console.log("hui");

     }
    res.render('thankyou') // {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else {
    //         pdf.create(html, options).toFile('./Report.pdf', function(err, res) {
    //             if (err) {
    //                 return console.log(err);
    //             } else {
    //                 console.log(res)
    //             }
    //         });
    //     } 
    // });
}



});

app.get("/*", function(req,res){
    res.render("404");
});

app.listen(8080, function () {
  console.log('Starting Application');
})


//
// Test data
// var answers = { "student" : 
//                         {
//                           "firstName" : "Andrew", 
//                           "lastName" : "Wooten",
//                           "email" : "andrew_wooten@mac.com"
//                         }, 
//                     "answers" : 
//                         { "READING" : 
//                             { 
//                                 "1" : { "questionType" : "General Question", "studentAnswer" : "A", "correctAnswer" : "A", "skillCategory" : "Big Picture", "subCategory" : "Main Idea" }, "2" : { "questionType" : "General Question", "studentAnswer" : "B", "correctAnswer" : "B", "skillCategory" : "Intent/Purpose", "subCategory" : "" }, "3" : { "questionType" : "Rhetoric ", "studentAnswer" : "C", "correctAnswer" : "C", "skillCategory" : "Rhetoric", "subCategory" : "Shift in Focus" }, "4" : { "questionType" : "Rhetoric ", "studentAnswer" : "32.5", "correctAnswer" : "A", "skillCategory" : "Rhetoric", "subCategory" : "Word Choice" }, "5" : { "questionType" : "Specific Detail ", "studentAnswer" : "A", "correctAnswer" : "D", "skillCategory" : "Comprehension", "subCategory" : "Inference" }, "6" : { "questionType" : "Specific Detail ", "studentAnswer" : "B", "correctAnswer" : "B", "skillCategory" : "Comprehension", "subCategory" : "Inference" }, "7" : { "questionType" : "Command of Evidence", "studentAnswer" : "C", "correctAnswer" : "D", "skillCategory" : "Comprehension", "subCategory" : "Inference" }, "8" : { "questionType" : "Rhetoric ", "studentAnswer" : "32.5", "correctAnswer" : "D", "skillCategory" : "Rhetoric", "subCategory" : "Devices" }, "9" : { "questionType" : "Words in Context", "studentAnswer" : "A", "correctAnswer" : "B", "skillCategory" : "Vocabulary", "subCategory" : "" }, "10" : { "questionType" : "Command of Evidence", "studentAnswer" : "B", "correctAnswer" : "D", "skillCategory" : "Comprehension", "subCategory" : "Interpretation" }, "11" : { "questionType" : "General Question", "studentAnswer" : "C", "correctAnswer" : "D", "skillCategory" : "Big Picture", "subCategory" : "Main Idea" }, "12" : { "questionType" : "Ideas", "studentAnswer" : "32.5", "correctAnswer" : "D", "skillCategory" : "Intent/Purpose", "subCategory" : "" }, "13" : { "questionType" : "Command of Evidence", "studentAnswer" : "A", "correctAnswer" : "A", "skillCategory" : "Intent/Purpose", "subCategory" : "" }, "14" : { "questionType" : "Words in Context", "studentAnswer" : "B", "correctAnswer" : "B", "skillCategory" : "Vocabulary ", "subCategory" : "" }, "15" : { "questionType" : "General Question", "studentAnswer" : "C", "correctAnswer" : "C", "skillCategory" : "Relationships", "subCategory" : "" }, "16" : { "questionType" : "Words in Context", "studentAnswer" : "32.5", "correctAnswer" : "A", "skillCategory" : "Vocabulary", "subCategory" : "" }, "17" : { "questionType" : "Infer/Imply/Suggest", "studentAnswer" : "A", "correctAnswer" : "C", "skillCategory" : "Relationships", "subCategory" : "" }, "18" : { "questionType" : "General Question", "studentAnswer" : "B", "correctAnswer" : "C", "skillCategory" : "Organization", "subCategory" : "" }, "19" : { "questionType" : "Charts and Graphs", "studentAnswer" : "C", "correctAnswer" : "A", "skillCategory" : "Use of Evidence", "subCategory" : "Data interpretation" }, "20" : { "questionType" : "Charts and Graphs", "studentAnswer" : "32.5", "correctAnswer" : "B", "skillCategory" : "Use of Evidence", "subCategory" : "Data interpretation" }, "21" : { "questionType" : "Charts and Graphs", "studentAnswer" : "A", "correctAnswer" : "C", "skillCategory" : "Use of Evidence", "subCategory" : "Data interpretation" }, "22" : { "questionType" : "Infer/Imply/Suggest", "studentAnswer" : "B", "correctAnswer" : "C", "skillCategory" : "Comprehension", "subCategory" : "" }, "23" : { "questionType" : "Command of Evidence", "studentAnswer" : "C", "correctAnswer" : "A", "skillCategory" : "Use of Evidence", "subCategory" : "" }, "24" : { "questionType" : "Infer/Imply/Suggest", "studentAnswer" : "32.5", "correctAnswer" : "B", "skillCategory" : "Big Picture", "subCategory" : "" }, "25" : { "questionType" : "Words in Context", "studentAnswer" : "A", "correctAnswer" : "C", "skillCategory" : "Vocabulary ", "subCategory" : "" }, "26" : { "questionType" : "Rhetoric ", "studentAnswer" : "B", "correctAnswer" : "B", "skillCategory" : "Literacy", "subCategory" : "" }, "27" : { "questionType" : "Ideas", "studentAnswer" : "C", "correctAnswer" : "D", "skillCategory" : "Relationships", "subCategory" : "" }, "28" : { "questionType" : "Rhetoric ", "studentAnswer" : "32.5", "correctAnswer" : "D", "skillCategory" : "Rhetoric", "subCategory" : "Devices" }, "29" : { "questionType" : "Dual Passages", "studentAnswer" : "A", "correctAnswer" : "D", "skillCategory" : "Big Picture", "subCategory" : "" }, "30" : { "questionType" : "Dual Passages", "studentAnswer" : "B", "correctAnswer" : "B", "skillCategory" : "Dual Passages", "subCategory" : "Relationship" }, "31" : { "questionType" : "Dual Passages", "studentAnswer" : "C", "correctAnswer" : "C", "skillCategory" : "Dual Passages", "subCategory" : "" }, "32" : { "questionType" : "Command of Evidence", "studentAnswer" : "32.5", "correctAnswer" : "B", "skillCategory" : "Use of Evidence", "subCategory" : "" }, "33" : { "questionType" : "General Question", "studentAnswer" : "A", "correctAnswer" : "B", "skillCategory" : "Big Picture", "subCategory" : "" }, "34" : { "questionType" : "Rhetoric ", "studentAnswer" : "B", "correctAnswer" : "A", "skillCategory" : "Rhetoric", "subCategory" : "Stylistic Elements" },
//                                 "35" : { "questionType" : "Specific Detail ", "studentAnswer" : "C", "correctAnswer" : "D", "skillCategory" : "Comprehension", "subCategory" : "Understanding" }, "36" : { "questionType" : "Command of Evidence", "studentAnswer" : "32.5", "correctAnswer" : "B", "skillCategory" : "Comprehension", "subCategory" : "Understanding" }, "37" : { "questionType" : "Specific Detail ", "studentAnswer" : "A", "correctAnswer" : "B", "skillCategory" : "Relationships", "subCategory" : "" }, "38" : { "questionType" : "Infer/Imply/Suggest", "studentAnswer" : "B", "correctAnswer" : "D", "skillCategory" : "Comprehension", "subCategory" : "Inference" }, "39" : { "questionType" : "Words in Context", "studentAnswer" : "C", "correctAnswer" : "C", "skillCategory" : "Vocabulary", "subCategory" : "" }, "40" : { "questionType" : "Ideas", "studentAnswer" : "32.5", "correctAnswer" : "A", "skillCategory" : "Comprehension", "subCategory" : "Interpretation" }, "41" : { "questionType" : "Command of Evidence", "studentAnswer" : "A", "correctAnswer" : "B", "skillCategory" : "Comprehension", "subCategory" : "Interpretation" }, "42" : { "questionType" : "Ideas", "studentAnswer" : "B", "correctAnswer" : "D", "skillCategory" : "Intent/Purpose", "subCategory" : "" }, "43" : { "questionType" : "General Question", "studentAnswer" : "C", "correctAnswer" : "C", "skillCategory" : "Intent/Purpose", "subCategory" : "" }, "44" : { "questionType" : "Words in Context", "studentAnswer" : "32.5", "correctAnswer" : "B", "skillCategory" : "Vocabulary ", "subCategory" : "" }, "45" : { "questionType" : "Specific Detail ", "studentAnswer" : "A", "correctAnswer" : "D", "skillCategory" : "Big Picture", "subCategory" : "Extraction" }, "46" : { "questionType" : "Command of Evidence", "studentAnswer" : "B", "correctAnswer" : "C", "skillCategory" : "Big Picture", "subCategory" : "Extraction" }, "47" : { "questionType" : "Words in Context", "studentAnswer" : "C", "correctAnswer" : "A", "skillCategory" : "Vocabulary ", "subCategory" : "" }, "48" : { "questionType" : "Infer/Imply/Suggest", "studentAnswer" : "32.5", "correctAnswer" : "B", "skillCategory" : "Comprehension", "subCategory" : "Inference" }, "49" : { "questionType" : "Command of Evidence", "studentAnswer" : "A", "correctAnswer" : "D", "skillCategory" : "Comprehension", "subCategory" : "Inference" }, "50" : { "questionType" : "Charts and Graphs", "studentAnswer" : "B", "correctAnswer" : "D", "skillCategory" : "Use of Evidence", "subCategory" : "Data" }, "51" : { "questionType" : "Ideas", "studentAnswer" : "C", "correctAnswer" : "D", "skillCategory" : "Big Picture", "subCategory" : "Synthesis" }, "52" : { "questionType" : "Ideas", "studentAnswer" : "32.5", "correctAnswer" : "A", "skillCategory" : "Relationships", "subCategory" : "" }
//                             },
//                           "MATHNC" : { "1" : { "questionType" : "General Question: Single Step", "studentAnswer" : "A", "correctAnswer" : "C", "skillCategory" : "Algebra", "subCategory" : "Elementary Algebra" }, "2" : { "questionType" : "General Question: Single Step", "studentAnswer" : "B", "correctAnswer" : "B", "skillCategory" : "Understanding Equations", "subCategory" : "System of Linear Equations" }, "3" : { "questionType" : "Word Problem", "studentAnswer" : "C", "correctAnswer" : "A", "skillCategory" : "Understanding Equations", "subCategory" : "System of Linear Equations" }, "4" : { "questionType" : "General Question: Single Step", "studentAnswer" : "32.5", "correctAnswer" : "A", "skillCategory" : "Algebra", "subCategory" : "Polynomials" }, "5" : { "questionType" : "General Question: Single Step", "studentAnswer" : "A", "correctAnswer" : "C", "skillCategory" : "Algebra", "subCategory" : "Advanced Algebra-rationals" }, "6" : { "questionType" : "General Question: Single Step", "studentAnswer" : "B", "correctAnswer" : "D", "skillCategory" : "Data Interpretation", "subCategory" : "Intepreting graphs of linear functions" }, "7" : { "questionType" : "General Question: Multi Step", "studentAnswer" : "C", "correctAnswer" : "A", "skillCategory" : "Exponents", "subCategory" : "Properties of exponents" }, "8" : { "questionType" : "General Question: Multi Step", "studentAnswer" : "32.5", "correctAnswer" : "C", "skillCategory" : "Geometry", "subCategory" : "Geometry" }, "9" : { "questionType" : "General Question: Multi Step", "studentAnswer" : "A", "correctAnswer" : "B", "skillCategory" : "Linear Equations", "subCategory" : "Linear Functions" }, "10" : { "questionType" : "General Question: Single Step", "studentAnswer" : "B", "correctAnswer" : "C", "skillCategory" : "Linear Equations", "subCategory" : "Linear Inequalities" }, "11" : { "questionType" : "General Question: Single Step", "studentAnswer" : "C", "correctAnswer" : "C", "skillCategory" : "Number Properties", "subCategory" : "Understanding of Rational/Irrational numbers" }, "12" : { "questionType" : "General Question: Single Step", "studentAnswer" : "32.5", "correctAnswer" : "B", "skillCategory" : "Algebra", "subCategory" : "Advanced Algebra-rearranging equations" }, "13" : { "questionType" : "General Question: Single Step", "studentAnswer" : "A", "correctAnswer" : "D", "skillCategory" : "Algebra", "subCategory" : "Polynomials" }, "14" : { "questionType" : "Word Problem ", "studentAnswer" : "B", "correctAnswer" : "A", "skillCategory" : "Understanding Equations", "subCategory" : "Making Functions from Word Problems" }, "15" : { "questionType" : "General Question: Single Step", "studentAnswer" : "C", "correctAnswer" : "D", "skillCategory" : "Algebra", "subCategory" : "Intermediate Algebra" }, "16" : { "questionType" : "Word Problem", "studentAnswer" : "32.5", "correctAnswer" : "3, 6, 9", "skillCategory" : "Understanding Equations", "subCategory" : "Solving Functions from Word Problems" }, "17" : { "questionType" : "General Question: Single Step", "studentAnswer" : "A", "correctAnswer" : "19", "skillCategory" : "Algebra", "subCategory" : "Polynomials" }, "18" : { "questionType" : "General Question: Single Step", "studentAnswer" : "B", "correctAnswer" : "12", "skillCategory" : "Geometry", "subCategory" : "Geometry" }, "19" : { "questionType" : "General Question: Multi Step", "studentAnswer" : "C", "correctAnswer" : "6", "skillCategory" : "Geometry", "subCategory" : "Angles and Circles" }, "20" : { "questionType" : "General Question: Multi Step", "studentAnswer" : "32.5", "correctAnswer" : "1/4", "skillCategory" : "Understanding Equations", "subCategory" : "Linear System of Equations" }
//                             },
//                           "MATHWC" : { "1" : { "questionType" : "Word Problem", "studentAnswer" : "A", "correctAnswer" : "C", "skillCategory" : "Understanding Equations", "subCategory" : "Make Functions out of Word Problems" }, "2" : { "questionType" : "Word Problem", "studentAnswer" : "B", "correctAnswer" : "B", "skillCategory" : "Understanding Equations", "subCategory" : "Solve Functions from Word Problems" }, "3" : { "questionType" : "Word Problem", "studentAnswer" : "C", "correctAnswer" : "A", "skillCategory" : "Algebra", "subCategory" : "Elementary Algebra" }, "4" : { "questionType" : "Word Problem", "studentAnswer" : "32.5", "correctAnswer" : "C", "skillCategory" : "Understanding Equations", "subCategory" : "Solve Functions from Word Problems" }, "5" : { "questionType" : "Word Problem", "studentAnswer" : "A", "correctAnswer" : "C", "skillCategory" : "Understanding Equations", "subCategory" : "Solve Functions from Word Problems-Percentages" }, "6" : { "questionType" : "Follow the Path", "studentAnswer" : "B", "correctAnswer" : "B", "skillCategory" : "Algebra", "subCategory" : "Elementary Algebra" }, "7" : { "questionType" : "Charts and Graphs", "studentAnswer" : "C", "correctAnswer" : "D", "skillCategory" : "Understanding Equations", "subCategory" : "Properties of Parabolic Functions" }, "8" : { "questionType" : "Word Problem", "studentAnswer" : "32.5", "correctAnswer" : "D", "skillCategory" : "Algebra", "subCategory" : "Intermediate Algebra" }, "9" : { "questionType" : "Word Problem", "studentAnswer" : "A", "correctAnswer" : "A", "skillCategory" : "Understanding Equations", "subCategory" : "Make Functions out of Word Problems" }, "10" : { "questionType" : "General Question: Single Step", "studentAnswer" : "B", "correctAnswer" : "B", "skillCategory" : "Algebra", "subCategory" : "Nested Functions" }, "11" : { "questionType" : "Charts and Graphs", "studentAnswer" : "C", "correctAnswer" : "B", "skillCategory" : "Data Interpretation", "subCategory" : "Interpret Table/Solve Functions from Table" }, "12" : { "questionType" : "Word Problem", "studentAnswer" : "32.5", "correctAnswer" : "D", "skillCategory" : "Understanding Equations", "subCategory" : "Make Functions out of Word Problems" }, 
//                                 "13" : { "questionType" : "Word Problem", "studentAnswer" : "A", "correctAnswer" : "D", "skillCategory" : "Statistics", "subCategory" : "Statistics" }, "14" : { "questionType" : "Charts and Graphs", "studentAnswer" : "B", "correctAnswer" : "C", "skillCategory" : "Data Interpretation", "subCategory" : "Interpret a Scatterplot" }, "15" : { "questionType" : "Word Problem", "studentAnswer" : "C", "correctAnswer" : "A", "skillCategory" : "Understanding Equations", "subCategory" : "Solve Functions from Word Problems" }, "16" : { "questionType" : "Charts and Graphs", "studentAnswer" : "32.5", "correctAnswer" : "B", "skillCategory" : "Data Interpretation", "subCategory" : "Interpret Table/Fractions" }, "17" : { "questionType" : "Word Problem", "studentAnswer" : "A", "correctAnswer" : "C", "skillCategory" : "Statistics", "subCategory" : "Percentages" }, "18" : { "questionType" : "Word Problem", "studentAnswer" : "B", "correctAnswer" : "C", "skillCategory" : "Statistics", "subCategory" : "Statistics" }, "19" : { "questionType" : "Charts and Graphs", "studentAnswer" : "C", "correctAnswer" : "B", "skillCategory" : "Statistics", "subCategory" : "Median" }, "20" : { "questionType" : "Charts and Graphs", "studentAnswer" : "32.5", "correctAnswer" : "C", "skillCategory" : "Statistics", "subCategory" : "Probability" }, "21" : { "questionType" : "Word Problem", "studentAnswer" : "A", "correctAnswer" : "D", "skillCategory" : "Understanding Equations", "subCategory" : "Make Functions out of Word Problems; Inequalities" }, "22" : { "questionType" : "General Question: Single Step", "studentAnswer" : "B", "correctAnswer" : "B", "skillCategory" : "Algebra", "subCategory" : "Elementary Algebra: Make an Equation with variables" }, "23" : { "questionType" : "Word Problem", "studentAnswer" : "C", "correctAnswer" : "A", "skillCategory" : "Statistics", "subCategory" : "Probability/Fractions" }, "24" : { "questionType" : "Charts and Graphs", "studentAnswer" : "32.5", "correctAnswer" : "A", "skillCategory" : "Understanding Equations", "subCategory" : "Circle Equation" }, "25" : { "questionType" : "Charts and Graphs", "studentAnswer" : "A", "correctAnswer" : "A", "skillCategory" : "Understanding Equations", "subCategory" : "Understanding Slope" }, "26" : { "questionType" : "Charts and Graphs", "studentAnswer" : "B", "correctAnswer" : "D", "skillCategory" : "Understanding Equations", "subCategory" : "Interpret Graphs and Choose I, II, III" }, "27" : { "questionType" : "Charts and Graphs", "studentAnswer" : "C", "correctAnswer" : "D", "skillCategory" : "Data Interpretation", "subCategory" : "Interpret Graphs " }, "28" : { "questionType" : "Charts and Graphs", "studentAnswer" : "32.5", "correctAnswer" : "B", "skillCategory" : "Data Interpretation", "subCategory" : "Make Equation from Graph" }, "29" : { "questionType" : "General Question: Single Step", "studentAnswer" : "A", "correctAnswer" : "B", "skillCategory" : "Understanding Equations", "subCategory" : "System of Equations, understanding of #solutions" }, "30" : { "questionType" : "General Question: Multi Step", "studentAnswer" : "B", "correctAnswer" : "A", "skillCategory" : "Geometry", "subCategory" : "Geometry" }, "31" : { "questionType" : "Word Problem", "studentAnswer" : "C", "correctAnswer" : "14", "skillCategory" : "Understanding Equations", "subCategory" : "Solve Functions from Word Problems" }, "32" : { "questionType" : "General Question: Single Step", "studentAnswer" : "32.5", "correctAnswer" : "7", "skillCategory" : "Algebra", "subCategory" : "Intermediate Algebra" }, "33" : { "questionType" : "General Question: Single Step", "studentAnswer" : "A", "correctAnswer" : "11", "skillCategory" : "Algebra", "subCategory" : "Polynomials" }, "34" : { "questionType" : "Word Problem", "studentAnswer" : "B", "correctAnswer" : "105", "skillCategory" : "Understanding Equations", "subCategory" : "Solve Functions from Word Problems" }, "35" : { "questionType" : "Word Problem", "studentAnswer" : "C", "correctAnswer" : "15", "skillCategory" : "Understanding Equations", "subCategory" : "Solve Functions from Word Problems" }, "36" : { "questionType" : "General Question: Multi Step", "studentAnswer" : "32.5", "correctAnswer" : "32", "skillCategory" : "Geometry", "subCategory" : "Geometry" }, "37" : { "questionType" : "General Question: Single Step", "studentAnswer" : "A", "correctAnswer" : "3284", "skillCategory" : "Algebra", "subCategory" : "Advanced Algebra" }, "38" : { "questionType" : "Word Problem", "studentAnswer" : null, "correctAnswer" : "7500", "skillCategory" : "Understanding Equations", "subCategory" : "Solve Functions from Word Problems" }
//                             },
//                           "WRITING" : { "1" : { "questionType" : "Revision: Grammar & Punctuation", "studentAnswer" : "A", "correctAnswer" : "B", "skillCategory" : "Mechanics: Grammar & Punctuation", "subCategory" : "Consistency" }, "2" : { "questionType" : "Revision: Effective Use of Language", "studentAnswer" : "B", "correctAnswer" : "B", "skillCategory" : "Mechanics: Effective Use of Language", "subCategory" : "Precision" }, "3" : { "questionType" : "Revision: Grammar & Punctuation", "studentAnswer" : "C", "correctAnswer" : "A", "skillCategory" : "Mechanics: Grammar & Punctuation", "subCategory" : "Plural Agreement" }, "4" : { "questionType" : "Relevance", "studentAnswer" : "32.5", "correctAnswer" : "A", "skillCategory" : "Organization", "subCategory" : "Reasoning" }, "5" : { "questionType" : "Revision: Effective Use of Language", "studentAnswer" : "A", "correctAnswer" : "D", "skillCategory" : "Mechanics: Effective Use of Language", "subCategory" : "Concision" }, "6" : { "questionType" : "Revision: Grammar & Punctuation", "studentAnswer" : "B", "correctAnswer" : "D", "skillCategory" : "Mechanics: Grammar & Punctuation", "subCategory" : "Parallel Structure" }, "7" : { "questionType" : "Revision: Effective Use of Language", "studentAnswer" : "C", "correctAnswer" : "B", "skillCategory" : "Mechanics: Effective Use of Language", "subCategory" : "Sentence Structure" }, 
//                                 "8" : { "questionType" : "Revision: Effective Use of Language", "studentAnswer" : "32.5", "correctAnswer" : "D", "skillCategory" : "Mechanics: Effective Use of Language", "subCategory" : "Redundancy " }, "9" : { "questionType" : "Logic & Reasoning", "studentAnswer" : "A", "correctAnswer" : "B", "skillCategory" : "Organization", "subCategory" : "Logical sequence " }, "10" : { "questionType" : "Revision: Effective Use of Language", "studentAnswer" : "B", "correctAnswer" : "B", "skillCategory" : "Mechanics: Effective Use of Language", "subCategory" : "Tone" }, "11" : { "questionType" : "Introductions & Conclusions", "studentAnswer" : "C", "correctAnswer" : "C", "skillCategory" : "Organization", "subCategory" : "Conclusion" }, "12" : { "questionType" : "Revision: Effective Use of Language", "studentAnswer" : "32.5", "correctAnswer" : "B", "skillCategory" : "Organization", "subCategory" : "Flow " }, "13" : { "questionType" : "Revision: Grammar & Punctuation", "studentAnswer" : "A", "correctAnswer" : "D", "skillCategory" : "Mechanics: Grammar & Punctuation", "subCategory" : "Punctuation" }, "14" : { "questionType" : "Revision: Grammar & Punctuation", "studentAnswer" : "B", "correctAnswer" : "C", "skillCategory" : "Mechanics: Grammar & Punctuation", "subCategory" : "Possessives " }, "15" : { "questionType" : "Relevance", "studentAnswer" : "C", "correctAnswer" : "C", "skillCategory" : "Organization", "subCategory" : "Reasoning" }, "16" : { "questionType" : "Revision: Grammar & Punctuation", "studentAnswer" : "32.5", "correctAnswer" : "C", "skillCategory" : "Mechanics: Grammar & Punctuation", "subCategory" : "Punctuation" }, "17" : { "questionType" : "Command of Evidence", "studentAnswer" : "A", "correctAnswer" : "B", "skillCategory" : "Use of Evidence", "subCategory" : "" }, "18" : { "questionType" : "Summarizing and Paraphrasing", "studentAnswer" : "B", "correctAnswer" : "B", "skillCategory" : "Organization", "subCategory" : "Logical sequence" }, "19" : { "questionType" : "Revision: Effective Use of Language", "studentAnswer" : "C", "correctAnswer" : "A", "skillCategory" : "Mechanics: Effective Use of Language", "subCategory" : "Stylistic Patterns" }, "20" : { "questionType" : "Revision: Effective Use of Language", "studentAnswer" : "32.5", "correctAnswer" : "D", "skillCategory" : "Mechanics: Effective Use of Language", "subCategory" : "Subject-Verb Agreement" }, "21" : { "questionType" : "Revision: Grammar & Punctuation", "studentAnswer" : "A", "correctAnswer" : "D", "skillCategory" : "Mechanics: Grammar & Punctuation", "subCategory" : "Logical Comparison " }, "22" : { "questionType" : "Logic & Reasoning", "studentAnswer" : "B", "correctAnswer" : "B", "skillCategory" : "Organization", "subCategory" : "Logical sequence" }, "23" : { "questionType" : "Revision: Grammar & Punctuation", "studentAnswer" : "C", "correctAnswer" : "A", "skillCategory" : "Mechanics: Grammar & Punctuation", "subCategory" : "Modifier Placement" }, "24" : { "questionType" : "Command of Evidence", "studentAnswer" : "32.5", "correctAnswer" : "B", "skillCategory" : "Use of Evidence", "subCategory" : "Data" }, "25" : { "questionType" : "Revision: Effective Use of Language", "studentAnswer" : "A", "correctAnswer" : "B", "skillCategory" : "Organization", "subCategory" : "Flow" }, "26" : { "questionType" : "Relevance", "studentAnswer" : "B", "correctAnswer" : "A", "skillCategory" : "Organization", "subCategory" : "Reasoning" }, "27" : { "questionType" : "Revision: Grammar & Punctuation", "studentAnswer" : "C", "correctAnswer" : "D", "skillCategory" : "Mechanics: Grammar & Punctuation", "subCategory" : "Punctuation" }, "28" : { "questionType" : "Words in Context", "studentAnswer" : "32.5", "correctAnswer" : "A", "skillCategory" : "Mechanics: Effective Use of Language", "subCategory" : "Tone" }, "29" : { "questionType" : "Revision: Grammar & Punctuation", "studentAnswer" : "A", "correctAnswer" : "C", "skillCategory" : "Mechanics: Grammar & Punctuation", "subCategory" : "Possessives" }, "30" : { "questionType" : "Revision: Grammar & Punctuation", "studentAnswer" : "B", "correctAnswer" : "C", "skillCategory" : "Mechanics: Grammar & Punctuation", "subCategory" : "Pronoun Clarity " }, "31" : { "questionType" : "Relevance", "studentAnswer" : "C", "correctAnswer" : "D", "skillCategory" : "Organization", "subCategory" : "Logical sequence" }, "32" : { "questionType" : "Revision: Effective Use of Language", "studentAnswer" : "32.5", "correctAnswer" : "B", "skillCategory" : "Mechanics: Effective Use of Language", "subCategory" : "Precision" }, "33" : { "questionType" : "Revision: Grammar & Punctuation", "studentAnswer" : "A", "correctAnswer" : "D", "skillCategory" : "Mechanics: Grammar & Punctuation", "subCategory" : "Sentence Structure" }, "34" : { "questionType" : "Words in Context", "studentAnswer" : "B", "correctAnswer" : "D", "skillCategory" : "Organization", "subCategory" : "Flow" }, "35" : { "questionType" : "Revision: Grammar & Punctuation", "studentAnswer" : "C", "correctAnswer" : "A", "skillCategory" : "Mechanics: Grammar & Punctuation", "subCategory" : "Punctuation" }, "36" : { "questionType" : "Words in Context", "studentAnswer" : "32.5", "correctAnswer" : "D", "skillCategory" : "Vocabulary ", "subCategory" : "Depth" }, "37" : { "questionType" : "Command of Evidence", "studentAnswer" : "A", "correctAnswer" : "A", "skillCategory" : "Use of Evidence", "subCategory" : "" }, "38" : { "questionType" : "Revision: Effective Use of Language", "studentAnswer" : "B", "correctAnswer" : "B", "skillCategory" : "Comprehension", "subCategory" : "Fundamental English" }, "39" : { "questionType" : "Revision: Grammar & Punctuation", "studentAnswer" : "C", "correctAnswer" : "C", "skillCategory" : "Mechanics: Grammar & Punctuation", "subCategory" : "Pronoun Agreement" }, "40" : { "questionType" : "Revision: Effective Use of Language", "studentAnswer" : "32.5", "correctAnswer" : "D", "skillCategory" : "Mechanics: Effective Use of Language", "subCategory" : "Items in a Series" }, 
//                                 "41" : { "questionType" : "Revision: Effective Use of Language", "studentAnswer" : "A", "correctAnswer" : "D", "skillCategory" : "Mechanics: Effective Use of Language", "subCategory" : "Concision" }, "42" : { "questionType" : "Logic & Reasoning", "studentAnswer" : "B", "correctAnswer" : "C", "skillCategory" : "Organization", "subCategory" : "Flow" }, "43" : { "questionType" : "Relevance", "studentAnswer" : "C", "correctAnswer" : "C", "skillCategory" : "Organization", "subCategory" : "Placement of evidence" }, "44" : { "questionType" : "Revision: Effective Use of Language", "studentAnswer" : "32.5", "correctAnswer" : "D", "skillCategory" : "Mechanics: Effective Use of Language", "subCategory" : "Redundancy" }} 
//                         },
//                     "testInfo" : {  "date" : { "day" : 12, "month" : 3, "year" : 2017 }, 
//                                     "time" : { "hours" : 21, "minutes" : 32 }, 
//                                     "tutorID" : "3842" 
//                                 },
//                     userID : 342421
//                 }



// var data = {

//     overallScores : {
//         score : {score: 0, ENGLISH: 0, READING: 0, WRITING: 0, MATH: 0},
//         table : {
//             READING : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             WRITING : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             MATHNC : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             MATHWC : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//         }
//     },

//     readingScores : {
//         score : {score: 360, rawScore: 36, nationalPercentile: 89},
//         tableSkill : { 
//             COMPREHENSION : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             BIG_PICTURE : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             INTENT_PURPOSE : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             RELATIONSHIPS : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             USE_OF_EVIDENCE : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             VOCABULARY : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             DUAL_PASSAGES : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             LITERACY : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//         },
//         tableQuestionType : {
//             COMMAND_OF_EVIDENCE : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             GENERAL_QUESTION : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             IDEAS : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             IMPLY_INFER_SUGGEST : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             RHETORIC : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             SPECIFIC_DETAIL : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             WORDS_IN_CONTEXT : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             CHARTS_AND_GRAPHS : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             DUAL_PASSAGES : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//         },
//         text : {
//             skills : {
//                 a1 : "Comprehension",
//                 a2 : "Intent/Purpose",
//                 a3 : "Use of Evidence"
//             },
//             questionType : {
//                 a1 : "Command of Evidence",
//                 a2 : "Specific Detail",
//                 a3 : "Words in Context"
//             }
//         }
//     },

//     writingScores : {
//         score : {score: 360, rawScore: 36, nationalPercentile: 89},
//         tableSkill : { 
//             MECHANICS : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             MECHANICS_EFFECTIVE_USE_OF_LANGUAGE : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             MECHANICS_GRAMMAR_PUNCTUATION : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             ORGANIZATION : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             USE_OF_EVIDENCE : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             COMPREHENSION : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             VOCABULARY : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//         },
//         tableQuestionType : {
//             COMMAND_OF_EVIDENCE : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             LOGIC_REASONING : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             RELEVANCE : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             REVISION_EFFECTIVE_USE_OF_LANGUAGE : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             REVISION_GRAMMAR_PUNCTUATION : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             WORDS_IN_CONTEXT : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             INTRODUCTIONS_AND_CONCLUSIONS : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             SUMMARIZING_AND_PARAPHRASING : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//         },
//         text : {
//             skills : {
//                 a1 : "Comprehension",
//                 a2 : "Intent/Purpose",
//                 a3 : "Use of Evidence"
//             },
//             questionType : {
//                 a1 : "Command of Evidence",
//                 a2 : "Specific Detail",
//                 a3 : "Words in Context"
//             }
//         }
//     },

//     mathScores : {
//         score : {score: 360, rawScore: 36, nationalPercentile: 89},
//         tableSkill : { 
//             ALGEBRA : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             GEOMETRY : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             DATA_INTERPRETATION : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             STATISTICS : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             UNDERSTANDING_EQUATIONS : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             EXPONENTS : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             LINEAR_EQUATIONS : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             NUMBER_PROPERTIES : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//         },
//         tableQuestionType : {
//             GENERAL_QUESTION_SINGLE_STEP : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             GENERAL_QUESTION_MULTI_STEP : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             CHARTS_AND_GRAPHS : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             WORD_PROBLEM : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             FREE_RESPONSE : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//             FOLLOW_THE_PATH : { total: 23, correct: 11, wrong: 10, percentCorrect: 2},
//         },
//         text : {
//             skills : {
//                 a1 : "Comprehension",
//                 a2 : "Intent/Purpose",
//                 a3 : "Use of Evidence"
//             },
//             questionType : {
//                 a1 : "Command of Evidence",
//                 a2 : "Specific Detail",
//                 a3 : "Words in Context"
//             }
//         }
//     },

//     keyPriorities: {
//         a1: "Math: Algebra",
//         a2: "Reading: Command of Evidence",
//         a3: "Math: Understanding Equations",
//         a4: "Math: Exponents"
//     }

// }


function convert(answers){                     
// Function to scale scores
  var mapper = {
      READING : {
          skillCategory : {
            COMPREHENSION : "Comprehension",
            BIG_PICTURE : "Big Picture",
            INTENT_PURPOSE : "Intent/Purpose",
            RELATIONSHIPS : "Relationships",
            USE_OF_EVIDENCE : "Use of Evidence",
            VOCABULARY : "Vocabulary",
            DUAL_PASSAGES : "Dual Passages",
            LITERACY : "Literacy"
        },
        questionType : {
            COMMAND_OF_EVIDENCE : "Command of Evidence",
            GENERAL_QUESTION : "General Question",
            IDEAS : "Ideas",
            IMPLY_INFER_SUGGEST : "Infer/Imply/Suggest",
            RHETORIC : "Rhetoric",
            SPECIFIC_DETAIL : "Specific Detail",
            WORDS_IN_CONTEXT : "Words in Context",
            CHARTS_AND_GRAPHS : "Charts and Graphs",
            DUAL_PASSAGES : "Dual Passages"
        }
      },
      WRITING : {
          skillCategory : {
            MECHANICS_EFFECTIVE_USE_OF_LANGUAGE : "Mechanics: Effective Use of Language",
            MECHANICS_GRAMMAR_PUNCTUATION : "Mechanics: Grammar & Punctuation",
            ORGANIZATION : "Organization",
            USE_OF_EVIDENCE : "Use of Evidence",
            COMPREHENSION : "Comprehension",
            VOCABULARY : "Vocabulary"
        },
        questionType : {
            COMMAND_OF_EVIDENCE : "Command of Evidence",
            LOGIC_REASONING : "Logic & Reasoning",
            RELEVANCE : "Relevance",
            REVISION_EFFECTIVE_USE_OF_LANGUAGE : "Revision: Effective Use of Language",
            REVISION_GRAMMAR_PUNCTUATION : "Revision: Grammar & Punctuation",
            WORDS_IN_CONTEXT : "Words in Context",
            INTRODUCTIONS_AND_CONCLUSIONS : "Introductions & Conclusions",
            SUMMARIZING_AND_PARAPHRASING : "Summarizing and Paraphrasing"
        }
    },
    MATH : {
        skillCategory : {
            ALGEBRA : "Algebra",
            GEOMETRY : "Geometry",
            LINEAR_EQUATIONS : "Linear Equations",
            NUMBER_PROPERTIES : "Number Properties",
            DATA_INTERPRETATION : "Data Interpretation",
            STATISTICS : "Statistics",
            UNDERSTANDING_EQUATIONS : "Understanding Equations"
        },
        questionType : {
            GENERAL_QUESTION_SINGLE_STEP : "General Question: Single Step",
            GENERAL_QUESTION_MULTI_STEP : "General Question: Multi Step",
            CHARTS_AND_GRAPHS : "Charts and Graphs",
            WORD_PROBLEM : "Word Problem",
            FOLLOW_THE_PATH : "Follow the Path"
        }
    }
}

  var dataset;


  function getDictTotal(dict) {
      var acc = 0
      for (var key in dict) {
          acc += dict[key]
      }
      return acc
  }

  dataset = {0: {'Math': 200, 'Reading': 100, 'Writing': 100},
     1: {'Math': 200, 'Reading': 100.0, 'Writing': 100.0},
     2: {'Math': 210, 'Reading': 100.0, 'Writing': 100.0},
     3: {'Math': 230, 'Reading': 110.0, 'Writing': 110.0},
     4: {'Math': 250, 'Reading': 120.0, 'Writing': 120.0},
     5: {'Math': 270, 'Reading': 130.0, 'Writing': 130.0},
     6: {'Math': 290, 'Reading': 140.0, 'Writing': 140.0},
     7: {'Math': 300, 'Reading': 150.0, 'Writing': 140.0},
     8: {'Math': 320, 'Reading': 150.0, 'Writing': 150.0},
     9: {'Math': 330, 'Reading': 160.0, 'Writing': 160.0},
     10: {'Math': 340, 'Reading': 170.0, 'Writing': 170.0},
     11: {'Math': 360, 'Reading': 180.0, 'Writing': 170.0},
     12: {'Math': 370, 'Reading': 180.0, 'Writing': 180.0},
     13: {'Math': 380, 'Reading': 190.0, 'Writing': 180.0},
     14: {'Math': 390, 'Reading': 190.0, 'Writing': 190.0},
     15: {'Math': 400, 'Reading': 200.0, 'Writing': 200.0},
     16: {'Math': 420, 'Reading': 200.0, 'Writing': 200.0},
     17: {'Math': 430, 'Reading': 210.0, 'Writing': 210.0},
     18: {'Math': 440, 'Reading': 210.0, 'Writing': 220.0},
     19: {'Math': 450, 'Reading': 220.0, 'Writing': 220.0},
     20: {'Math': 460, 'Reading': 220.0, 'Writing': 230.0},
     21: {'Math': 470, 'Reading': 230.0, 'Writing': 230.0},
     22: {'Math': 480, 'Reading': 230.0, 'Writing': 240.0},
     23: {'Math': 490, 'Reading': 240.0, 'Writing': 250.0},
     24: {'Math': 500, 'Reading': 240.0, 'Writing': 250.0},
     25: {'Math': 510, 'Reading': 240.0, 'Writing': 260.0},
     26: {'Math': 510, 'Reading': 250.0, 'Writing': 260.0},
     27: {'Math': 520, 'Reading': 250.0, 'Writing': 270.0},
     28: {'Math': 530, 'Reading': 260.0, 'Writing': 270.0},
     29: {'Math': 540, 'Reading': 270.0, 'Writing': 280.0},
     30: {'Math': 550, 'Reading': 270.0, 'Writing': 290.0},
     31: {'Math': 560, 'Reading': 280.0, 'Writing': 290.0},
     32: {'Math': 570, 'Reading': 280.0, 'Writing': 300.0},
     33: {'Math': 570, 'Reading': 290.0, 'Writing': 310.0},
     34: {'Math': 580, 'Reading': 290.0, 'Writing': 310.0},
     35: {'Math': 590, 'Reading': 300.0, 'Writing': 320.0},
     36: {'Math': 600, 'Reading': 300.0, 'Writing': 330.0},
     37: {'Math': 610, 'Reading': 310.0, 'Writing': 330.0},
     38: {'Math': 620, 'Reading': 310.0, 'Writing': 340.0},
     39: {'Math': 630, 'Reading': 320.0, 'Writing': 350.0},
     40: {'Math': 640, 'Reading': 320.0, 'Writing': 360.0},
     41: {'Math': 650, 'Reading': 330.0, 'Writing': 370.0},
     42: {'Math': 650, 'Reading': 330.0, 'Writing': 380.0},
     43: {'Math': 660, 'Reading': 340.0, 'Writing': 390.0},
     44: {'Math': 670, 'Reading': 340.0, 'Writing': 400.0},
     45: {'Math': 680, 'Reading': 350.0, 'Writing': 0},
     46: {'Math': 680, 'Reading': 350.0, 'Writing': 0},
     47: {'Math': 690, 'Reading': 360.0, 'Writing': 0},
     48: {'Math': 700, 'Reading': 370.0, 'Writing': 0},
     49: {'Math': 710, 'Reading': 370.0, 'Writing': 0},
     50: {'Math': 720, 'Reading': 380.0, 'Writing': 0},
     51: {'Math': 730, 'Reading': 390.0, 'Writing': 0},
     52: {'Math': 740, 'Reading': 400.0, 'Writing': 0},
     53: {'Math': 750, 'Reading': 0, 'Writing': 0},
     54: {'Math': 760, 'Reading': 0, 'Writing': 0},
     55: {'Math': 770, 'Reading': 0, 'Writing': 0},
     56: {'Math': 780, 'Reading': 0, 'Writing': 0},
     57: {'Math': 790, 'Reading': 0, 'Writing': 0},
     58: {'Math': 800, 'Reading': 0, 'Writing': 0}}


var math_percentiles  = {
        200: 1,
        210: 1,
        220: 1,
        230: 1,
        240: 1,
        250: 1,
        260: 1,
        270: 1,
        280: 1,
        290: 1,
        300: 1,
        310: 1,
        320: 1,
        330: 1,
        340: 2,
        350: 3,
        360: 3,
        370: 4,
        380: 5,
        390: 7,
        400: 8,
        410: 10,
        420: 12,
        430: 14,
        440: 16,
        450: 18,
        460: 21,
        470: 24,
        480: 27,
        490: 30,
        500: 34,
        510: 40,
        520: 45,
        530: 49,
        540: 53,
        550: 57,
        560: 60,
        570: 64,
        580: 67,
        590: 70,
        600: 73,
        610: 76,
        620: 79,
        630: 81,
        640: 83,
        650: 86,
        660: 87,
        670: 88,
        680: 89,
        690: 91,
        700: 92,
        710: 94,
        720: 95,
        730: 95,
        740: 96,
        750: 97,
        760: 98,
        770: 98,
        780: 98,
        790: 99,
        800: 99
     }

var reading_percentiles = {
        100: 1,
        110: 1,
        120: 1,
        130: 1,
        140: 1,
        150: 1,
        160: 1,
        170: 2,
        180: 3,
        190: 6,
        200: 9,
        210: 13,
        220: 17,
        230: 22,
        240: 28,
        250: 35,
        260: 42,
        270: 49,
        280: 56,
        290: 63,
        300: 69,
        310: 75,
        320: 81,
        330: 86,
        340: 91,
        350: 94,
        360: 96,
        370: 98,
        380: 99,
        390: 99,
        400: 99
    }

var writing_percentiles = {
        100: 1,
        110: 1,
        120: 1,
        130: 1,
        140: 1,
        150: 1,
        160: 1,
        170: 2,
        180: 3,
        190: 6,
        200: 9,
        210: 13,
        220: 17,
        230: 22,
        240: 28,
        250: 35,
        260: 42,
        270: 49,
        280: 56,
        290: 63,
        300: 69,
        310: 75,
        320: 81,
        330: 86,
        340: 91,
        350: 94,
        360: 96,
        370: 98,
        380: 99,
        390: 99,
        400: 99
    }


  function scale(subject, rawScore) {

      return dataset[rawScore][subject];
  }

  // final output





  //subject as in input (READING, MATHNC, etc.)
  //category as in final output (USE_OF_EVIDENCE)
  //type equals to skillCategory or questionType
  function categoryCounter(subject, category, type){
      
      var total = 0;
      var correct = 0;


      
      if (subject == "MATH"){
        
          for (var q in answers.answers.MATHNC){



              if(answers.answers.MATHNC[q][type] == mapper[subject][type][category]){
                  total++;
                  //evaluate weird question
                  if(q == '16'){
                    var weirdQ = answers["answers"]["MATHNC"][q]["studentAnswer"];
                    if (weirdQ == 3 || weirdQ == 6 || weirdQ == 9){
                        correct++;
                    } 
                  } else {
                    if (answers.answers["MATHNC"][q]["correctAnswer"] == answers.answers["MATHNC"][q]["studentAnswer"]){
                        correct++;
                    }
                  }
              }
          }
          for (var q in answers.answers["MATHWC"]){
                
              if(answers.answers["MATHWC"][q][type] == mapper[subject][type][category]){

                  total++;
                  if(answers.answers["MATHWC"][q].correctAnswer==answers.answers["MATHWC"][q].studentAnswer){
                      correct++;
                  }
              }
          }
      }
      //if not MATH

      for (var q in answers.answers[subject]){

          if(answers.answers[subject][q][type] == mapper[subject][type][category]){
              total++;
              if(answers.answers[subject][q].correctAnswer==answers.answers[subject][q].studentAnswer){
                  correct++;
              }
          }
      }
      //count values
      var wrong = total - correct;
      var percentCorrect = Math.floor(correct*100/total);
      if (total == 0){
        percentCorrect = 0;
      }
      return {total: total, correct:correct, wrong:wrong, percentCorrect:percentCorrect}
  }
  var categoryData = {
      MATH : {
          questionType : {},
          skillCategory : {}
      },
      READING : {
          questionType : {},
          skillCategory : {}
      },
      WRITING : {
          questionType : {},
          skillCategory : {}
      }
  }
  for (var subject in categoryData){

      for (var type in categoryData[subject]){

          for (var category in mapper[subject][type]){

              categoryData[subject][type][category] = categoryCounter(subject, category, type);

          }
      }
  }
// console.log(categoryData);
// console.log(categoryData.MATH.skillCategory);


  //functions
  function percentCorrect(correct, total){
    return Math.floor(correct*100/total);
  }

  function filterWrap(data, score) {
      function filterCriteria(data) {
          return data.Score == score;
      }
      return data.filter(filterCriteria)[0].Percentile
  }

  // ALL VARIABLES

  //necessary variables
  var readingCorrect
  var writingCorrect
  var mathNCCorrect
  var mathWCCorrect


var wrongAnswers = {
    READING : {},
    WRITING : {},
    MATHNC : {},
    MATHWC : {}
}
  
  function getOverallScores(answers) {
      // Overall score
      var temp = {}
         for (var subject in answers["answers"]) {
          var total = 0
          for (var q_no in answers["answers"][subject]) {
            //evaluate weird question with multiple answers
            if(q_no == '16' && subject == 'MATHNC'){
                var weirdQ = answers["answers"][subject][q_no]["studentAnswer"];
                if (weirdQ == 3 || weirdQ == 6 || weirdQ == 9){
                    total++;
                } 

            } else {
                //evaluate questions
                  if (answers["answers"][subject][q_no]["studentAnswer"] == 
                       answers["answers"][subject][q_no]["correctAnswer"]) {
                      total++
                  } else {
                        wrongAnswers[subject][q_no] = { studentAnswer : answers["answers"][subject][q_no]["studentAnswer"],  
                       correctAnswer: answers["answers"][subject][q_no]["correctAnswer"]};
                  }
                }
          }
          temp[subject] = total
      }

      
      readingCorrect = temp["READING"]
      writingCorrect = temp["WRITING"]
      mathNCCorrect  = temp["MATHNC"]
      mathWCCorrect = temp["MATHWC"]
  }



getOverallScores(answers);

  var totalReading = scale("Reading", readingCorrect);
  var totalWriting = scale("Writing", writingCorrect);
  var totalEnglish = totalReading + totalWriting;
  var totalMath = scale("Math", mathNCCorrect + mathWCCorrect);
  var totalScore = totalEnglish+totalMath;

var readingPercentile = Math.floor(reading_percentiles[totalReading])
var writingPercentile = Math.floor(writing_percentiles[totalWriting])
var mathPercentile = Math.floor(math_percentiles[totalMath])


  //##################
  //
  // OVERALL SECTION
  //
  //#################

  //template
  var overall = {
      score : {score: totalScore, ENGLISH: totalEnglish, READING: totalReading, WRITING: totalWriting, MATH: totalMath},
      table : {
        READING : { total: 52, correct: readingCorrect, wrong: 52-readingCorrect, percentCorrect: percentCorrect(readingCorrect,52)},
        WRITING : { total: 44, correct: writingCorrect, wrong: 44-writingCorrect, percentCorrect: percentCorrect(writingCorrect,44)},
        MATHNC : { total: 20, correct: mathNCCorrect, wrong: 20-mathNCCorrect, percentCorrect: percentCorrect(mathNCCorrect,20)},
        MATHWC : { total: 38, correct: mathWCCorrect, wrong: 38-mathWCCorrect, percentCorrect: percentCorrect(mathWCCorrect,38)},
      }
  }
    
  //typeOfCategories is the object that contains a list of category objects
  function priorityList(subject, type){
      var priority1 = 0; 
      var priority2 = 0; 
      var priority3 = 0;
      for (category in categoryData[subject][type]) {
          if (priority1 == 0 || categoryData[subject][type][category].wrong > categoryData[subject][type][priority1].wrong){
              priority3 = priority2;
              priority2 = priority1;
              priority1 = category;
          } else if (priority2 == 0 || categoryData[subject][type][category].wrong > categoryData[subject][type][priority2].wrong){
              priority3 = priority2;
              priority2 = category;
          } else if ((priority3 == 0) || categoryData[subject][type][category].wrong > categoryData[subject][type][priority3].wrong){
              priority3 = category;
          }
      }
      return output = {
          a1 : mapper[subject][type][priority1],
          a2 : mapper[subject][type][priority2],
          a3 : mapper[subject][type][priority3]
      }
  }

  function globalPriorityList(){
      var priority1 = { value: 0, string: 0 }; 
      var priority2 = { value: 0, string: 0 };
      var priority3 = { value: 0, string: 0 };
      var priority4 = { value: 0, string: 0 };
      for (var subject in categoryData){
          for (var type in categoryData[subject]){
              for (var category in categoryData[subject][type]){
                  if (priority1.value == 0 || categoryData[subject][type][category].wrong > priority1.value){
                      priority4 = {value:priority3.value, string:priority3.string};
                      priority3 = {value:priority2.value, string:priority2.string};
                      priority2 = {value:priority1.value, string:priority1.string};
                      priority1.string = "" + subject + ": " + mapper[subject][type][category];
                      priority1.value = categoryData[subject][type][category].wrong;
                  } else if (priority2 == 0 || categoryData[subject][type][category].wrong > priority2.value){
                      priority4 = {value:priority3.value, string:priority3.string};
                      priority3 = {value:priority2.value, string:priority2.string};
                      priority2.string = "" + subject + ": " + mapper[subject][type][category];
                      priority2.value = categoryData[subject][type][category].wrong;
                  } else if ((priority3 == 0) || categoryData[subject][type][category].wrong > priority3.value){
                      priority4 = {value:priority3.value, string:priority3.string};
                      priority3.string = "" + subject + ": " + mapper[subject][type][category];
                      priority3.value = categoryData[subject][type][category].wrong;
                  } else if ((priority4 == 0) || categoryData[subject][type][category].wrong > priority4.value){
                      priority4.string = "" + subject + ": " + mapper[subject][type][category];
                      priority4.value = categoryData[subject][type][category].wrong;
                  }
              }
          }
      }
      return {
        a1: priority1.string,
        a2: priority2.string,
        a3: priority3.string,
        a4: priority4.string
    }
  }



a = (answers.answers.MATHNC['10']["skillCategory"]);
b = (mapper.MATH.skillCategory.LINEAR_EQUATIONS);
// console.log(a);
// console.log(b);
// console.log(a==b);
// console.log(a===b);
// console.log()
// console.log(answers.answers.MATHNC['10']["skillCategory"]==mapper.MATH.skillCategory.LINEAR_EQUATIONS)
// console.log(answers.answers.MATHNC['10']["skillCategory"]===mapper.MATH.skillCategory.LINEAR_EQUATIONS)
// console.log(answers.answers.MATHNC['10']['skillCategory'][category] == mapper["MATHNC"]["skillCategory"][category])

  // ###
  // ###
  // ###
  // ###

  /// FINAL DATA STRUCTURE

  // ###
  // ###
  // ###
  // ###

  return {

    overallScores : overall,

    readingScores : {
        score : {score: totalReading, rawScore: readingCorrect, nationalPercentile: readingPercentile},
        tableSkill : categoryData.READING.skillCategory,
        tableQuestionType : categoryData.READING.questionType,
        text : {
            skills : priorityList("READING", "skillCategory"),
            questionType : priorityList("READING", "questionType")
        }
    },

    writingScores : {
        score : {score: totalWriting, rawScore: writingCorrect, nationalPercentile: writingPercentile},
        tableSkill : categoryData.WRITING.skillCategory,
        tableQuestionType : categoryData.WRITING.questionType,
        text : {
            skills : priorityList("WRITING", "skillCategory"),
            questionType : priorityList("WRITING", "questionType")
        }
    },

    mathScores : {
        score : {score: totalMath, rawScore: mathNCCorrect+mathWCCorrect, nationalPercentile: mathPercentile},
        tableSkill : categoryData.MATH.skillCategory,
        tableQuestionType : categoryData.MATH.questionType,
        text : {
            skills : priorityList("MATH", "skillCategory"),
            questionType : priorityList("MATH", "questionType")
        }
    },

    keyPriorities: globalPriorityList()

  }



}
