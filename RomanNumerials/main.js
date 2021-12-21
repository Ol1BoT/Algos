

// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.


let Roman = (s) => {

	let sumArr = []
	let total = 0

	for (let i = 0; i < s.length; i++) {

		switch (s[i]) {

			case "I":
				sumArr.push(1)
				break
			case "V":
				sumArr.push(5)
				break
			case "X":
				sumArr.push(10)
				break
			case "L":
				sumArr.push(50)
				break
			case "C":
				sumArr.push(100)
				break
			case "D":
				sumArr.push(500)
				break
			case "M":
				sumArr.push(1000)
				break

		}

	}

	sumArr.forEach((v,i) => {

		if (i == 0) {
			total += v
			return
		}

		if (sumArr[i-1] < v) {
			total += v-sumArr[i-1]*2
			return
		}

		total += v

	})

	return total

}

console.log(Roman("III"))
console.log(Roman("IV"))