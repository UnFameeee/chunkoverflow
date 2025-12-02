// Thêm token vào tất cả các requests
function setupAxiosInterceptors() {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    }
}

// Kiểm tra authentication khi load trang
document.addEventListener('DOMContentLoaded', function() {
    setupAxiosInterceptors();
});

// Xử lý logout
function handleLogout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    window.location.href = '/admin/login';
} 