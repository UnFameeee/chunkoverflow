document.addEventListener('DOMContentLoaded', function() {
    // Status badge updates
    const statusSelect = document.querySelectorAll('.status-select');
    statusSelect.forEach(select => {
        select.addEventListener('change', function() {
            const badge = this.closest('form').querySelector('.status-badge');
            if (badge) {
                badge.className = 'status-badge px-2 inline-flex text-xs leading-5 font-semibold rounded-full';
                
                switch(this.value) {
                    case 'PUBLISHED':
                        badge.classList.add('bg-green-100', 'text-green-800');
                        break;
                    case 'IN_DEVELOPMENT':
                        badge.classList.add('bg-yellow-100', 'text-yellow-800');
                        break;
                    default:
                        badge.classList.add('bg-gray-100', 'text-gray-800');
                }
                badge.textContent = this.value;
            }
        });
    });

    // Edit tool handler
    window.editTool = async function(id) {
        try {
            const response = await axios.get(`/admin/blocks/${id}`);
            const tool = response.data;
            
            // Populate form fields
            document.getElementById('editTitle').value = tool.title;
            document.getElementById('editSummaryDescription').value = tool.summaryDescription;
            document.getElementById('editFullDescription').value = tool.fullDescription;
            document.getElementById('editStatus').value = tool.status;
            document.getElementById('editUrl').value = tool.url || '';
            
            // Update form action
            const form = document.getElementById('editForm');
            form.action = `/admin/blocks/${id}?_method=PUT`;
            
            // Show modal
            document.getElementById('editBlockModal').classList.remove('hidden');
        } catch (error) {
            console.error('Error fetching tool:', error);
            showToast('Error loading tool details', 'error');
        }
    };

    // Delete confirmation
    window.confirmDelete = function(event) {
        if (!confirm('Are you sure you want to delete this tool?')) {
            event.preventDefault();
        }
    };

    // Toast notifications
    window.showToast = function(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg ${
            type === 'success' ? 'bg-green-500' : 'bg-red-500'
        } text-white transform transition-all duration-300 translate-y-full`;
        
        toast.textContent = message;
        document.body.appendChild(toast);
        
        // Animate in
        setTimeout(() => {
            toast.style.transform = 'translateY(0)';
        }, 10);
        
        // Remove after 3 seconds
        setTimeout(() => {
            toast.style.transform = 'translateY(100%)';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    };
}); 