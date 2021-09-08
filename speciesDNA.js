const dnaBases = ['A', 'T', 'C', 'G'];

// Returns a random DNA base
const returnRandBase = () => {
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, baseArray) => {
  
  return {
    specimenNum: number,
    dna: baseArray,
    mutate () {
      //Generate a random array position
      let randNum = Math.floor(Math.random() * 15);
      //Filter the dna base array so the same base cant be assigned again
      let filteredArr = dnaBases.filter(base => base !== baseArray[randNum])
      let randNumDna = Math.floor(Math.random() * 3)
      
      //Assign the random base to the dna base array
      baseArray[randNum] = filteredArr[randNumDna];
      return this.dna;
    },
    compareDNA (obj) {
      let count = 0;
      
      //Iterate through both arrays and check whether the dna strands match
      for (let i=0; i<obj.dna.length; i++) {
        if(obj.dna[i] === baseArray[i]) {
          count++;
        }
      }

      //If count is not 0 then print the percentage of which two species are similar.
      if(count > 0) {
        let percentage = Math.round((count/baseArray.length)*100)

        console.log('specimen #1 and specimen #2 have ' + percentage + '% DNA in common.');
      } else {
        console.log('specimen #1 and specimen #2 have 0% DNA in common');
      }
    },
    willLikelySurvive () {
      let count = 0;
      let percentage = 0;

      //Iterate through the array and increment count when dna equals C or G
      for (let i=0; i<baseArray.length; i++) {
        if (baseArray[i] === 'C' || baseArray[i] === 'G') {
          count++
        }
      }

      //If count isnt zero(falsy) calculate percentage.
      if (count) {
        percentage = Math.round(count/baseArray.length*100)
      } 

      if (percentage >= 60) {
        return true;
      } else {
        return false;
      }
      
    }
  }
}

let objArray = []

//Create 30 instances of the species and store them in an array
for(let i=0; i<30; i++) {
  objArray.push(pAequorFactory(i, mockUpStrand()));
}






