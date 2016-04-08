[
	new Date(2016, 3, 4),
	new Date(2016, 3, 5),
	new Date(2016, 3, 8),
]
.sort(by("day"))


	function by(key)
		{
			var getD = `"get" + ${key.toUpperCase(charAt[0]) + key.slice(1)}`;
			return (a,b) => a[getD]() - b[getD]()
		}

////////////////////////
function capitalize(str)
{
	return str.replace(/\w/, char => char.toUpperCase())
}

function by(key)
{
	var method = "get" + capitalize(key);

	return (a, b) => a[method]() - b[method]()
}

//////////////////////////////
.forEach(set("day", 1))

function capitalize(str)
{
	return str.replace(/\w/, char => char.toUpperCase())
}

function set(key, i)
{
	var method = "set" + capitalize(key);
	return a => a[method](i) 
}


///////////////
var obj = {}
	obj.key = 3
	obj.["key"] = 3

	var some = "key"
	obj.some = obj["some"]
	obj[some] = obj["key"]
////////////////

var clone = (date) => new Date(date.getTime())

////////////////

var  arr = [1, 2, 3]
arr.slice() != arr // [1,2,3]
arr.reverse()

var res = (arr) => {
	if (typeof arr == "string")
		return arr.split("").reverse().join("")

	return arr.slice().reverse()
}

/////////////
var rev = var => typeOf val == "string"
	? arr.split("").reverse().join("")
	: arr.slice().reverse()

//////////
javascript-puzzlers.herokuapp.com