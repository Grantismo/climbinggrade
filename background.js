var YDS = ["5.1", "5.2", "5.3", "5.4", "5.5", "5.6", "5.7", "5.8", "5.9", "5.10a", "5.10b", "5.10c", "5.10d", "5.11a", "5.11b", "5.11c", "5.11d", "5.12a", "5.12b", "5.12c", "5.12d", "5.13a", "5.13b", "5.13c", "5.13d", "5.14a", "5.14b", "5.14c", "5.14d", "5.15a", "5.15b", "5.15c", "5.15d"];

var french = ["2", "2+", "3", "3+", "4", "4+", "5a", "5b", "5c", "6a", "6a+", "6b", "6b+", "6c", "6c/6c+", "6c+", "7a", "7a+", "7b", "7b+", "7c", "7c+", "8a", "8a+", "8b", "8b+", "8c", "8c+", "9a", "9a+", "9b", "9b+", "9c"] ;

var australia = ["7", "8", "9/10", "11", "12", "13", "14/15", "15/16", "17", "18", "19", "20", "20/21", "21", "22", "22/23", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39"];

var south_africa = ["8", "9", "10", "12", "13", "14", "15", "16", "17/18", "19", "20", "21", "22", "22/23", "23/24", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41"];

var germany = ["III-", "III", "III+", "IV-", "IV", "IV+/V-", "V-/V", "V+/VI-", "VI-/VI", "VI/VI+", "VII-", "VII-/VII", "VII/VII+", "VII+", "VIII-", "VIII", "VIII/VIII+", "VIII+", "IX-", "IX-/IX", "IX/IX+", "IX+", "X-", "X-/X", "X/X+", "X+", "XI-", "XI", "XI+", "XI+/XII-", "XII-/XII", "XII", "XII+"];

var uk = ["M", "D", "VD 3a", "VD/HVD 3b", "HVD/S 3c", "MS 4a", "S/HS 4b", "HS/VS 4b", "HVS 4c", "HVS 5a", "E1 5a", "E1 5b", "E2 5b", "E2 5c", "E3 5c", "E3 6a", "E4 6a", "E4 6b", "E5 6b", "E5/E6 6b", "E6 6b", "E6 6c", "E7 6c", "E7 7a", "E8 7a", "E8 7b", "E9 7b", "E10 7b", "E10 7c", "E11 7c", "E11 8a", "E11 8b", "E11 8c"];

var bouldering = ["V0", "V0+", "V1", "V2", "V2", "V3", "V4", "V4", "V5", "V5", "V6", "V7", "V8", "V8", "V9", "V10", "V11", "V12", "V13", "V14", "V15", "V16"];
var font = ["4", "4+", "5", "5+", "6A", "6A+", "6B", "6B+", "6C", "6C+", "7A", "7A+", "7B", "7B+", "7C", "7C+", "8A", "8A+", "8B", "8B+", "8C", "8C+"];

function frenchToYDS(fgrade){
  var i = french.indexOf(fgrade)
  return YDS[i]
}

var frenchRegex = /[^0-9a-zA-Z]([1-9][A-Ca-c]\+?)[^0-9a-zA-Z]/i


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
                 $(this).replaceWith(beforeText + "<span class='climbinggrade' title='" + frenchToYDS(matchText.toLowerCase()) + "'>" + matchText + "</span>" + afterText);
               }
              });
