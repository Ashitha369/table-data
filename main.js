$(document).ready(function () {
    // Initialize the DataTable with default rows per page
    var table = $('#example').DataTable({
        ajax: {
            url: './MOCK_DATA.json', // Path to your local JSON file
            dataSrc: ''
        },
        columns: [
            { data: 'name' },
            { data: 'position' },
            { data: 'office' },
            { data: 'age' },
            { data: 'start date' }
        ],
        dom: 'Bfrtip', // Buttons and filter options layout
        buttons: [
            {
                extend: 'excelHtml5', // Export to Excel
                text: 'Export to Excel',
                title: 'Data Export',
                className: 'btn btn-success', // Styling with Bootstrap
                exportOptions: {
                    // Only export the data visible in the current page
                    modifier: {
                        page: 'current' // Only export data from the current page
                    }
                }
            }
        ],
        lengthMenu: [10, 25, 50, 100], // Default dropdown options for number of records per page
        pageLength: 10 // Default number of records per page
    });

    // Handle change event for the "Show Entries" dropdown
    $('#entries').on('change', function () {
        var pageLength = parseInt($(this).val()); // Get the selected number of rows per page
        table.page.len(pageLength).draw(); // Update DataTable with the selected page length
    });
});