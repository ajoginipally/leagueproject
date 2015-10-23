// //borrows from project 02, Tim Richards
//
// function member(user, fname, lname, year) {
// 	return {
// 		user: user,
// 		fname: fname,
// 		lname: lname,
// 		year: year
// 	};
// }
//
//
// var team = [
// 	// Keep this first member for testing please.
// 	member('jdoe', 'John', 'Doe', ''),
// 	// TODO: add your team members here:
// 	member('avaderiyatti', 'Aditya', 'Vaderiyattil', 'junior'),
// 	member('cjmoore', 'Callum', 'Moore', 'junior'),
// 	member('jimmyly', 'Jimmy', 'Ly', 'junior'),
// 	member('dhauserman', 'Dhonovan', 'Hauserman', 'junior'),
// 	member('andrewchang', 'Andrew', 'Chang', 'junior'),
// 	member('ajoginipally', 'Abhiteja', 'Joginipally', 'junior')
// ];
//
//
// function copy(membero) {
// 	// TODO
// 	var memCopy = member(membero.user, membero.fname, membero.lname, membero.year);
// 	return memCopy;
// }
//
//
// function copyAll(members) {
// 	var nmembers = [];
// 	members.forEach(m => {
// 		nmembers.push(copy(m));
// 	});
// 	return nmembers;
// }
//
//
// function result(success, message, data) {
// 	return {
// 		success: success,
// 		message: message,
// 		data: data,
// 		count: data.length
// 	};
// }
//
//
// function find(user) {
// 	// TODO
// 	i = 0;
// 	while (i < team.length) {
// 		if (team[i].user == user) {
// 			return copy(team[i]);
// 		}
// 		else {
// 			i++;
// 		}
// 	}
// 	return null;
// }
//
// function all() {
// 	// TODO
// 	return result(true, 'team members', copyAll(team));
// }
//
//
// function one(user) {
// 	// TODO
// 	if (typeof user != "string") {
// 		return result(false, 'bad object', []);
// 	}
// 	else if (find(user) === null) {
// 		return result(false, 'team member not found', []);
// 	}
// 	else {
// 		return result(true, 'team member found', [find(user)]);
// 	}
// }
//
// // This exports public functions to the outside world.
// exports.all = all;
// exports.one = one;
