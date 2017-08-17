describe('practice.js', function () {

	describe('me', function () {
		it('should exist', function () {
			expect(me).toBeDefined();
		})
		it('should be an object', function () {
			expect(me).toEqual(jasmine.any(Object));
		})
		it('should have name and age keys', function () {
			expect(me.hasOwnProperty('name')).toBe(true);
			expect(me.hasOwnProperty('age')).toBe(true);
		})
		it('should have values for name and age', function () {
			expect(me.name).toBeTruthy();
			expect(me.age).toBeTruthy();
		})
	})

	describe('favoriteThings', function () {
		it('should exist', function () {
			expect(favoriteThings).toBeDefined();
		})
		it('should have band, food, person, book, movie, and holiday keys', function () {
			expect(favoriteThings.hasOwnProperty('band')).toBe(true);
			expect(favoriteThings.hasOwnProperty('food')).toBe(true);
			expect(favoriteThings.hasOwnProperty('person')).toBe(true);
			expect(favoriteThings.hasOwnProperty('book')).toBe(true);
			expect(favoriteThings.hasOwnProperty('movie')).toBe(true);
			expect(favoriteThings.hasOwnProperty('holiday')).toBe(true);
		})
		it('should have values for all keys', function () {
			expect(favoriteThings.band).toBeTruthy();
			expect(favoriteThings.food).toBeTruthy();
			expect(favoriteThings.person).toBeTruthy();
			expect(favoriteThings.book).toBeTruthy();
			expect(favoriteThings.movie).toBeTruthy();
			expect(favoriteThings.holiday).toBeTruthy();
		})
	})

	describe('favoriteThings (part 2)', function () {
		it('should still exist', function () {
			expect(favoriteThings).toBeDefined();
		})
		it('should now have car and brand keys', function () {
			expect(favoriteThings.hasOwnProperty('car')).toBe(true);
			expect(favoriteThings.hasOwnProperty('brand')).toBe(true);
		})
		it('should have values for car and brand', function () {
			expect(favoriteThings.car).toBeTruthy();
			expect(favoriteThings.brand).toBeTruthy();
		})
	})

	describe('favoriteThings (part 3)', function () {
		it('food should be "Chicken Nuggets"', function () {
			expect(favoriteThings.food).toBe('Chicken Nuggets');
		})
		it('book should be "Harry Potter"', function () {
			expect(favoriteThings.book).toBe('Harry Potter');
		})
	})

	describe('backPack', function () {
		it('should exist', function () {
			expect(backPack).toBeDefined();
		})

		describe('item', function () {
			it('should exist', function () {
				expect(item).toBeDefined();
			})
			it('should equal "firstPocket"', function () {
				expect(item).toBe('firstPocket');
			})
		})

		it('should have a firstPocket property', function () {
			// using bracket notation as this is how the readme is written
			var item = 'firstPocket'
			expect(backPack.hasOwnProperty(item)).toBe(true);
		})
		it('firstPocket should have a value of "chapstick"', function () {
			expect(backPack.firstPocket).toBe('chapstick');
		})

	})

	// describe('alsoMe', function () {
	// 	it('should exist', function () {
	// 		expect(alsoMe).toBeDefined();
	// 	})
	// 	it('should have the following properties: name, age, height, gender, married, eyeColor, hairColor', function () {
	// 		expect(alsoMe.hasOwnProperty('name')).toBe(true);
	// 		expect(alsoMe.hasOwnProperty('age')).toBe(true);
	// 		expect(alsoMe.hasOwnProperty('height')).toBe(true);
	// 		expect(alsoMe.hasOwnProperty('gender')).toBe(true);
	// 		expect(alsoMe.hasOwnProperty('married')).toBe(true);
	// 		expect(alsoMe.hasOwnProperty('eyeColor')).toBe(true);
	// 		expect(alsoMe.hasOwnProperty('hairColor')).toBe(true);
	// 	})
	// })

	// describe('album', function () {
	// 	it('should exist', function () {
	// 		expect(album).toBeDefined();
	// 	})
	// 	it('should have 5 keys', function () {
	// 		var numberOfKeys = Object.keys(album).length;
	// 		expect(numberOfKeys).toBe(5);
	// 	})
	// })

	// describe('states', function () {
	// 	it('should exist', function () {
	// 		expect(states).toBeDefined();
	// 	})
	// 	it('should have 5 keys', function () {
	// 		var numberOfKeys = Object.keys(states).length;
	// 		expect(numberOfKeys).toBe(5);
	// 	})
	// })

	// describe('user1', function () {
	// 	it('should have all truthy values', function () {
	// 		var isAllTruthy = true;
	// 		for (key in user1) {
	// 			if (!user1[key]) {
	// 				isAllTruthy = false;
	// 			}
	// 		}
	// 		expect(isAllTruthy).toBe(true);
	// 	})
	// 	it('should have 3 keys', function () {
	// 		var numberOfKeys = Object.keys(user1).length;
	// 		expect(numberOfKeys).toBe(3);
	// 	})
	// })

	describe('user2', function () {
		it('name should be "Tyler S. McGinnis" and email should be "tyler.mcginnis@devmounta.in" ', function () {
			expect(user2.name).toBe('Tyler S. McGinnis');
			expect(user2.email).toBe('tyler.mcginnis@devmounta.in');
		})
	})

	describe('methodCollection', function () {
		it('should exist', function () {
			expect(methodCollection).toBeDefined();
		})
		describe('alertHello', function () {
			it('should exist', function () {
				expect(methodCollection.hasOwnProperty('alertHello')).toBe(true);
			})
			it('should be a function', function () {
				expect(methodCollection.alertHello).toEqual(jasmine.any(Function));
			})
			it('should alert "hello"', function () {
				var alert = spyOn(window, 'alert')
				methodCollection.alertHello();
				expect(alert).toHaveBeenCalledWith('hello');
			})
		})
		describe('logHello', function () {
			it('should exist', function () {
				expect(methodCollection.hasOwnProperty('logHello')).toBe(true);
			})
			it('should be a function', function () {
				expect(methodCollection.logHello).toEqual(jasmine.any(Function));
			})
			it('should console.log "hello"', function () {
				var consoleLog = spyOn(console, 'log');
				methodCollection.logHello();
				expect(consoleLog).toHaveBeenCalledWith('hello');
			})
		})
	})

	describe('makePerson', function () {
		it('should exist', function () {
			expect(makePerson).toBeDefined();
		})
		it('should return an object', function () {
			expect(makePerson()).toEqual(jasmine.any(Object));
		})

		describe('return object', function () {
			var returnObject = {};
			beforeEach(function () {
				returnObject = makePerson('Tester', 'Nov 1', '123456789');
			})
			it('should have 3 keys named "name", "birthday" and "ssn"', function () {
				var numberOfKeys = Object.keys(returnObject).length;

				expect(numberOfKeys).toBe(3);
				expect(returnObject.hasOwnProperty('name')).toBe(true);
				expect(returnObject.hasOwnProperty('birthday')).toBe(true);
				expect(returnObject.hasOwnProperty('ssn')).toBe(true);
			})
			it('should assign the values from the arguments passed', function () {
				expect(returnObject.name).toBe('Tester');
				expect(returnObject.birthday).toBe('Nov 1');
				expect(returnObject.ssn).toBe('123456789');
			})
		})

	})

	describe('makeCard', function () {
		it('should exist', function () {
			expect(makeCard).toBeDefined();
		})
		it('should return an object', function () {
			expect(makeCard()).toEqual(jasmine.any(Object));
		})
	})

	// describe('bindCard', function () {
	// 	var person = makePerson('Tester', 'Nov 1', '123456789');
	// 	var makeCard = jasmine.createSpy('makeCard').and.returnValue({
	// 		expirationDate: 'Dec2016',
	// 		cardNumber: '1234123412341234',
	// 		securityCode: '321'
	// 	});
	// 	var card = makeCard();

	// 	it('should exist', function () {
	// 		expect(bindCard).toBeDefined();
	// 	})
	// 	it('should return an object', function () {
	// 		expect(bindCard(person, card)).toEqual(jasmine.any(Object));
	// 	})
	// 	it('should combine the properties of a person and a card', function () {
	// 		var keys = Object.keys(bindCard(person, card));

	// 		expect(keys).toContain('name');
	// 		expect(keys).toContain('birthday');
	// 		expect(keys).toContain('ssn');
	// 		expect(keys).toContain('expirationDate');
	// 		expect(keys).toContain('cardNumber');
	// 		expect(keys).toContain('securityCode');
	// 	})
	// })


})
