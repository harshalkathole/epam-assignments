function countWords(str) {
	str = str.toLowerCase();
	str = str.replace(/[\.\,\;\:\!\?\(\)\&]/g, ' ');
	var regEx = /\S+/ig;
	var singleWord;
	var wordCount = 0;
	while ((singleWord = regEx.exec(str)) != null) {
		wordCount++;
	}
  return wordCount; 
}