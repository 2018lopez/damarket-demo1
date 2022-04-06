class Vendor{

    generateReport(reportType, authUser){

        const reports = [ 'Monthly Expense', 'Pending Invoices', 'Yearly Expenses']

        if(reports.includes(reportType) && authUser == true){

            return true
        }

        return false


    }
}

module.exports =Vendor