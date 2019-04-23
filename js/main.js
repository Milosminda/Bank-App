var accBtn = document.querySelector('#accBtn');
var addAccBtn = document.querySelector('#addAccBtn');
var editDelBtn = document.querySelector('#editDelBtn');
var mainView = document.querySelector('#mainView');
var mainBody = document.querySelector('#mainBody');
var formView = document.querySelector('#formView');

var accId = document.querySelector('#accId');
var eaccId = document.querySelector('#eaccId');
var accName = document.querySelector('#accName');
var eaccName = document.querySelector('#eaccName');
var accDeposit = document.querySelector('#accDeposit');
var eaccDeposit = document.querySelector('#eaccDeposit');
var accCard = document.querySelector('#accCard');
var eaccCard = document.querySelector('#eaccCard');
var saveBtn = document.querySelector('#saveBtn');
var editBtn = document.querySelector('#editBtn');
var editView = document.querySelector('#editView');
var editBody = document.querySelector('#editBody');
var id;
var db = [
	{
		id : '1',
		name : 'Milos',
		deposit : 25000,
		cCard : 'Master'
	},
	{
		id : '2',
		name : 'Milica',
		deposit : 20000,
		cCard : 'Visa'
	}
];

addAccBtn.addEventListener('click', showFormView);
accBtn.addEventListener('click', showMainView);
saveBtn.addEventListener('click', createAccount);
editDelBtn.addEventListener('click', showEditView);
editBtn.addEventListener('click', changeAccount);
createTable()
function createTable() {
	var text = '';
	for (var i = 0; i < db.length; i++) {
		text += '<tr>';
		text += '<td>'+db[i].id+'</td>';
		text += '<td>'+db[i].name+'</td>';
		text += '<td>'+db[i].deposit+'</td>';
		text += '<td>'+db[i].cCard+'</td>';
		text += '</tr>';
	};
	mainBody.innerHTML = text;
}
function createEditTable() {
	var text = '';
	for (var i = 0; i < db.length; i++) {
		text += '<tr>';
		text += '<td>'+db[i].id+'</td>';
		text += '<td>'+db[i].name+'</td>';
		text += '<td>'+db[i].deposit+'</td>';
		text += '<td>'+db[i].cCard+'</td>';
		text += '<td><button data-id="'+i+'" class="btn btn-warning edit">Edit</button></td>';
		text += '<td><button id="'+i+'" class="btn btn-danger delete">Delete</button></td>';
		text += '</tr>';
	};
	editBody.innerHTML = text;
	var deleteBtns = document.querySelectorAll('.delete');
	var editBtns = document.querySelectorAll('.edit');
	for (var i = 0; i < deleteBtns.length; i++) {
		deleteBtns[i].addEventListener('click', deleteAccount);
		editBtns[i].addEventListener('click', editAccount);
	};
}
function createAccount() {
	var id = accId.value;
	var name = accName.value;
	var deposit = accDeposit.value;
	var card = accCard.value;
	var newArray = {
		id : id,
		name : name,
		deposit : deposit,
		cCard : card
	};
	db.push(newArray);
	createTable();
	showMainView();
}
function editAccount() {
	mainView.style.display = 'none';
	formView.style.display = 'none';
	editView.style.display = 'none';
	editFormView.style.display = 'block';
		id = this.getAttribute('data-id');
	eaccId.value = db[id].id;
	eaccName.value = db[id].name;
	eaccDeposit.value = db[id].deposit;
	eaccCard.value = db[id].cCard;
}
function changeAccount() {
	var accId = eaccId.value;
	var accName = eaccName.value;
	var accDeposit = eaccDeposit.value;
	var accCard = eaccCard.value;

	db[id] = {
		id : accId,
		name : accName,
		deposit : accDeposit,
		cCard : accCard
	};
	createTable();
	showMainView();
}
function deleteAccount() {
	var id = this.id;
	db.splice(id, 1);
	createTable();
	showMainView();
}
function showFormView() {
	mainView.style.display = 'none';
	formView.style.display = 'block';
	editView.style.display = 'none';
	editFormView.style.display = 'none';
}
function showMainView() {
	mainView.style.display = 'block';
	formView.style.display = 'none';
	editView.style.display = 'none';
	editFormView.style.display = 'none';
}
function showEditView() {
	mainView.style.display = 'none';
	formView.style.display = 'none';
	editView.style.display = 'block';
	editFormView.style.display = 'none';
	createEditTable();
}




