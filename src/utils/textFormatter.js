class TextFormatter {
    static formatDescription(text) {
        // Tách các dòng
        const lines = text.split('\n');
        let html = '';
        let inList = false;

        lines.forEach(line => {
            line = line.trim();
            if (!line) {
                // Xử lý dòng trống
                if (inList) {
                    html += '</ul>\n';
                    inList = false;
                }
                html += '<br>\n';
            }
            // Xử lý heading
            else if (line.includes('Chunksum:')) {
                html += `<h1 class="text-3xl font-bold mb-6">${line}</h1>\n`;
            }
            // Xử lý các mục có ✔️
            else if (line.startsWith('✔️')) {
                if (!inList) {
                    html += '<ul class="ml-8 space-y-2">\n';
                    inList = true;
                }
                html += `<li>${line}</li>\n`;
            }
            // Xử lý các tiêu đề có emoji
            else if (line.match(/^[🌟👉🔹💻❓📌]/)) {
                if (inList) {
                    html += '</ul>\n';
                    inList = false;
                }
                html += `<h3 class="text-xl font-medium mt-4 mb-2">${line}</h3>\n`;
            }
            // Xử lý text thường
            else {
                if (inList) {
                    html += '</ul>\n';
                    inList = false;
                }
                html += `<p class="mb-2">${line}</p>\n`;
            }
        });

        // Đóng list nếu còn mở
        if (inList) {
            html += '</ul>\n';
        }

        return `<div class="space-y-4">${html}</div>`;
    }
}

module.exports = TextFormatter; 