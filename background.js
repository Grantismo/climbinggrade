var yds = ["5.1", "5.2", "5.3", "5.4", "5.5", "5.6", "5.7", "5.8", "5.9", "5.10a", "5.10b", "5.10c", "5.10d", "5.11a", "5.11b", "5.11c", "5.11d", "5.12a", "5.12b", "5.12c", "5.12d", "5.13a", "5.13b", "5.13c", "5.13d", "5.14a", "5.14b", "5.14c", "5.14d", "5.15a", "5.15b", "5.15c", "5.15d"];

var french = ["2", "2+", "3", "3+", "4", "4+", "5a", "5b", "5c", "6a", "6a+", "6b", "6b+", "6c", "6c/6c+", "6c+", "7a", "7a+", "7b", "7b+", "7c", "7c+", "8a", "8a+", "8b", "8b+", "8c", "8c+", "9a", "9a+", "9b", "9b+", "9c"] ;

var australia = ["7", "8", "9/10", "11", "12", "13", "14/15", "15/16", "17", "18", "19", "20", "20/21", "21", "22", "22/23", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39"];

var south_africa = ["8", "9", "10", "12", "13", "14", "15", "16", "17/18", "19", "20", "21", "22", "22/23", "23/24", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41"];

var germany = ["iii-", "iii", "iii+", "iv-", "iv", "iv+/v-", "v-/v", "v+/vi-", "vi-/vi", "vi/vi+", "vii-", "vii-/vii", "vii/vii+", "vii+", "viii-", "viii", "viii/viii+", "viii+", "ix-", "ix-/ix", "ix/ix+", "ix+", "x-", "x-/x", "x/x+", "x+", "xi-", "xi", "xi+", "xi+/xii-", "xii-/xii", "xii", "xii+"];

var uk = ["m", "d", "vd 3a", "vd/hvd 3b", "hvd/s 3c", "ms 4a", "s/hs 4b", "hs/vs 4b", "hvs 4c", "hvs 5a", "e1 5a", "e1 5b", "e2 5b", "e2 5c", "e3 5c", "e3 6a", "e4 6a", "e4 6b", "e5 6b", "e5/e6 6b", "e6 6b", "e6 6c", "e7 6c", "e7 7a", "e8 7a", "e8 7b", "e9 7b", "e10 7b", "e10 7c", "e11 7c", "e11 8a", "e11 8b", "e11 8c"];

var bouldering = ["v0", "v0+", "v1", "v2", "v2", "v3", "v4", "v4", "v5", "v5", "v6", "v7", "v8", "v8", "v9", "v10", "v11", "v12", "v13", "v14", "v15", "v16"];
var font = ["4", "4+", "5", "5+", "6a", "6a+", "6b", "6b+", "6c", "6c+", "7a", "7a+", "7b", "7b+", "7c", "7c+", "8a", "8a+", "8b", "8b+", "8c", "8c+"];

function convertGrade(grade, source, target){
  var i = source.indexOf(grade.toLowerCase());
  return target[i];
}

function frenchToYDS(fgrade){
}

var frenchRegex = /[^0-9a-zA-Z]([1-9][A-Ca-c]\+?)/i;


$('*', 'body').contents()
              .filter(function(){
                return this.nodeType === 3;
              })
              .each(function(){
               var match = this.nodeValue.match(frenchRegex);
               if(match != null){
                 var matchLength = match[1].length;
                 var startIndex = match.index + 1; 
                 var beforeText = this.nodeValue.substring(0, startIndex);
                 var matchText = this.nodeValue.substring(startIndex, startIndex + matchLength);
                 var afterText = this.nodeValue.substring(startIndex + matchLength);
                 $(this).replaceWith(beforeText + "<span class='climbinggrade-tooltip'>" + matchText + "</span><div class='climbinggrade-tooltiptext'> <b>Free Climbing: </b>" + convertGrade(matchText, french, yds) + "<br /><b>Bouldering:</b> " + convertGrade(matchText, font, bouldering) + "</div>" + afterText);
               }
              });

$('.climbinggrade-tooltip').each(function(){
  $(this).qtip({
     position: {
       my: 'bottom center',
       at: 'top center' 
     },
     style: {
       classes: 'qtip-tipped'
     },
     content: {
       text: $(this).next('.climbinggrade-tooltiptext')
     }
  });
});

