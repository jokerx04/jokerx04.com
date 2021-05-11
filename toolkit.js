// test
$(function () {
	
	// Prism Syntax Highlighter
	$.prismSyntaxHighlighter = function () {
		
		var prismInputProgramCode = $("#prismInputProgramCode").val();
		
		var prismOutputProgramCode = "";
		
		prismOutputProgramCode += "<pre class=\"line-numbers\"><code class=\"language-" + $("#prismLanguageType").val() + "\">";
		prismOutputProgramCode += prismInputProgramCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
		prismOutputProgramCode += "</code></pre>";
		
		$("#prismOutputProgramCode").val(prismOutputProgramCode);
		
		$("#prismProgramCode").html(prismOutputProgramCode);
		
		Prism.highlightAll();
		
	};
	
	
});
