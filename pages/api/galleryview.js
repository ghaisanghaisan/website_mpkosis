const { google } = require("googleapis");
const credentials = require("../credentials.json");
const scopes = ["https://www.googleapis.com/auth/drive"];
const auth = new google.auth.JWT(
	process.env.GOOGLE_CLIENT_EMAIL,
	null,
	process.env.GOOGLE_PRIVATE_KEY,
	scopes
);
const drive = google.drive({ version: "v3", auth });

export default function handler(request, response) {
	drive.files.list(
		{
			fields: "files(id, name, thumbnailLink, mimeType, webViewLink)",
			pageSize: "50",
		},
		(err, res) => {
			if (err) throw err;
			const files = res.data.files;
			if (files.length) {
				response.status(200).json({ files });
			} else {
				console.log("No files found");
			}
		}
	);
}
