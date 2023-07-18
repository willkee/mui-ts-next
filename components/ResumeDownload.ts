export function onDownload() {
	const link = document.createElement("a");
	link.download = `will_kee_resume_${new Date().getTime()}.pdf`;
	link.href = "/will_kee_resume.pdf";
	link.click();
}
