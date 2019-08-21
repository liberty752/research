var a = [1, 2, 3, 4, 5];

function test1(table)
{
	var len = table.length;
	for (var i = 0; i < len - 1; i++)
	{
		testPop(table, i);
	}
}

function testPop(table, index)
{
	var b = table.pop();
	testExchange(b, table, index);
}

function testExchange(b, table, index)
{
	testPush(b, table, index);
}

function testPush(b, table, index)
{
	var c = table.pop();
	if (table.length == index)
	{
		table.push(b);
	}
	else
	{
		testPush(b, table, index);
	}
	table.push(c);
}


test1(a);
console.log(a);