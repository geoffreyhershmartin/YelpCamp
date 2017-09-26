var d3 = require('d3');



function convert (answers, reportData){                     
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
  			INTRODUCTIONS_AND_CONCLUSIONS : "Introductions & Conclusion",
  			SUMMARIZING_AND_PARAPHRASING : "Summarizing and Paraphrasing"
  		}
      },
  	MATH : {
  		skillCategory : {
  			ALGEBRA : "Algebra",
  			GEOMETRY : "Geometry",
  			DATA_INTERPRETATION : "Data Interpretation",
  			STATISTICS : "Statistics",
  			UNDERSTANDING_EQUATIONS : "Understanding Equations",
  			LINEAR_EQUATIONS : "Linear Equations",
  			NUMBER_PROPERTIES : "Number Proporties"
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

  var math_percentiles
  var writing_percentiles
  var reading_percentiles
  var total_percentiles

  function getDictTotal(dict) {
      var acc = 0
      for (var key in dict) {
          acc += dict[key]
      }
      return acc
  }
 
  var data = d3.csv("rawScoreConvert.csv", function(data) {
    data.forEach(function(data) {
      data["Raw Score"] = +data["Raw Score"];
      data["Math"] = +data["Math"];
      data["Reading"] = +data["Reading"];
      data["Writing"] = +data["Writing"];
    });
    dataset = data;
  });

  var math_convert = d3.csv("math_percentiles.csv", function(data) {
    data.forEach(function(data) {
      data["Score"] = +data["Score"];
      data["Percentile"] = +data["Percentile"];
    });
    math_percentiles = data;
  });

  var reading_convert = d3.csv("reading_percentiles.csv", function(data) {
    data.forEach(function(data) {
      data["Score"] = +data["Score"];
      data["Percentile"] = +data["Percentile"];
    });
    reading_percentiles = data;
  });

  var writing_convert = d3.csv("writing_percentiles.csv", function(data) {
    data.forEach(function(data) {
      data["Score"] = +data["Score"];
      data["Percentile"] = +data["Percentile"];
    });
    writing_percentiles = data;
  });

  var total_convert = d3.csv("total_percentiles.csv", function(data) {
    data.forEach(function(data) {
      data["Score"] = +data["Score"];
      data["Percentile"] = +data["Percentile"];
    });
    total_percentiles = data;
  });

  function scale(subject, rawScore) {
      console.log(dataset);
      return dataset[subject][rawScore];
  }

  // final output

  var reportInfo = {
      student : answers.student,
      testInfo : answers.testInfo
  }

  //subject as in input (READING, MATHNC, etc.)
  //category as in final output (USE_OF_EVIDENCE)
  //type equals to skillCategory or questionType
  function categoryCounter(subject, category, type){
      
      var total = 0;
      var correct = 0;
      
      if (subject == "MATH"){
          for (var q in answers["MATHNC"]){
              if(answers["MATHNC"].q.skillCategory == mapper.subject.type.category){
                  total++;
                  if(answers["MATHNC"].q.correctAnswer==q.studentAnswer){
                      correct++;
                  }
              }
          }
          for (var q in answers["MATHWC"]){
              if(answers["MATHWC"].q.skillCategory == mapper.subject.type.category){
                  total++;
                  if(answers["MATHWC"].q.correctAnswer==q.studentAnswer){
                      correct++;
                  }
              }
          }
      }
      //if not MATH
      for (var q in answers.subject){
          if(q.skillCategory == mapper.subject.type.category){
              total++;
              if(q.correctAnswer==q.studentAnswer){
                  correct++;
              }
          }
      }
      //count values
      var wrong = total - correct;
      var percentCorrect = correct*100/total
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
      for (var type in categoryData.subject){
          for (var category in mapper.subject.type){
              categoryData.subject.type[category] = categoryCounter(subject, category, type);
          }
      }
  }



  //functions
  function percentCorrect(correct, total){
    return correct*100/total;
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

  var readingPercentile = filterWrap(reading_percentiles, totalReading)
  var writingPercentile = filterWrap(writing_percentiles, totalWriting)
  var mathPercentile = filterWrap(math_percentiles, totalMath)

  function getOverallScores(answers) {
      // Overall score
      var temp = {}
         for (var subject in answers["answers"]) {
          var total = 0
          for (var q_no in answers["answers"][subject]) {
              if (answers["answers"][subject][q_no]["studentAnswer"] == 
                   answers["answers"][subject][q_no]["correctAnswer"]) {
                  total++
              }
          }
          temp[subject] = total
      }
      
      var readingCorrect = temp["READING"]
      var writingCorrect = temp["WRITING"]
      var mathNCCorrect  = temp["MATHNC"]
      var mathWCCorrect = temp["MATHWC"]
  }

  var totalReading = scale("Reading", readingCorrect);
  var totalWriting = scale("Writing", writingCorrect);
  var totalEnglish = totalReading + totalWriting;
  var totalMath = scale("Math", mathNCCorrect + mathWCCorrect);
  var totalScore = totalEnglish+totalMath;

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
      for (category in categoryData.subject.type) {
          if (priority1 == 0 || categoryData.subject.type.category.wrong > categoryData.subject.type.priority1.wrong){
              priority1 = category;
          } else if (priority2 == 0 || categoryData.subject.type.category.wrong > categoryData.subject.type.priority2.wrong){
              priority2 = category;
          } else if ((priority3 == 0) || categoryData.subject.type.category.wrong > categoryData.subject.type.priority3.wrong){
              priority3 = category;
          }
      }
      var output = {
          a1 : mapper.subject.type.priority1,
          a2 : mapper.subject.type.priority2,
          a3 : mapper.subject.type.priority3
      }
  }

  function globalPriorityList(){
      var priority1 = { value: 0, string: 0 }; 
      var priority2 = { value: 0, string: 0 };
      var priority3 = { value: 0, string: 0 };
      var priority4 = { value: 0, string: 0 };
      for (var subject in categoryData){
          for (var type in subject){
              for (var category in type){
                  if (priority1.value == 0 || categoryData.subject.type.category.wrong > priority1.value){
                      priority1.string = "" + subject + ": " + category;
                  } else if (priority2 == 0 || categoryData.subject.type.category.wrong > priority2.value){
                      priority2.string = "" + subject + ": " + category;
                  } else if ((priority3 == 0) || categoryData.subject.type.category.wrong > priority3.value){
                      priority3.string = "" + subject + ": " + category;
                  } else if ((priority4 == 0) || categoryData.subject.type.category.wrong > priority4.value){
                      priority4.string = "" + subject + ": " + category;
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