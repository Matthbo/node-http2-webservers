exports.install = function() {
	ROUTE('/', view_index)
	ROUTE('/html', view_html)
}

function view_index() {
	var self = this
	self.json({ status: 'Success', silly_html: 'https://localhost:8000/html' })
}

function view_html(){
	var self = this
	self.layout(null)
	self.view('index')
}