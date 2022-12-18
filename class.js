
class Animal{
    constructor(animalName, bloodType){
        this.animalName = animalName;
        this.bloodType = bloodType;
       

     //abstract class
      if(this.constructor == Animal){
        throw new Error("cannot instantiate abstract class")
      }
      
         
    }


   
    //private properties that are hidden
    #classNames = ["Arthropoda", "Fish", "Amphibia", "Reptiles", "Aves", "Mammals"];
    #inhabitants = ["Aquatic hab", "terrestial hab"];
    #skeletal_Type = ["Exoskeleton", "Endoskeleton"]
    #hasHairs = "true";
    #hasFeathers = "true";
    #hasFins = "true";
    

    
    //private methods
    #withBackbone(){
        //animals with backbone method
        console.log("vertebrate animal")
    }


    #withOutBackbone(){
        //animals without backbone method
        console.log("invertebrate animal")
    }
    
  
   //read all the private methods with hash(#) prefix
    checkBackbone(check){
    //    this.#vertebrateCheck(check)
        if(check == "presence"){
            this.#withBackbone()

        }else if(check == "absence"){
            this.#withOutBackbone()
        }else{
            console.log("specie not in Kingdom Animal")
        }
      
    }

   
    
}





class Arthropoda extends Animal {
     constructor(animalName, bloodType, vertebrate){
         super(animalName, bloodType);
         this.vertebrate = vertebrate;

     }

    //polymorphism
     descriptiveFeatures(){
        let des = `
            ${this.animalName}
            (phylum Arthropoda), any member of the phylum Arthropoda,
            the largest phylum in the animal kingdom, which includes such familiar forms as lobsters,
            crabs, spiders, mites, insects, centipedes, and millipedes
        `;
        return des;
        
     }

     vertebrateCheck(presence){
        //calls the parent method inherited; using call stack data structure to pass the arg.  recursive fun
        super.checkBackbone(presence)
     }

     bodyTempcheck(){
        console.log(`${this.animalName} is a ${this.bloodType} animal`)
        
     }

     
     
    
}
const arthropoda = new Arthropoda("butterfly", "coldBlooded", "vertebrate")
arthropoda.bodyTempcheck()
console.log(arthropoda.descriptiveFeatures())


/*
   #vertebrateCheck  and  #nonVertebrateCheck are private method in our base class: => Kingdom__Animalia
   but we  use  public method: => checkBackbone to access it and we inherits this  from base class(Kingdom__Animalia) 
   because is private and using super to get the acces to the method from parent class,
*/
// arthropoda.vertebrateCheck("presence")

// arthropoda.checkBackbone("absence")
// console.log(arthropoda.descriptiveFeatures("Arthropoda"))
//Arthropoda, Fish, Amphibia, Reptiles, Aves, Mammals
// arthropoda.fly()



//No 2
class Fish extends Animal{
    constructor (animalName, bodyTemp, hasFins){
        super(animalName, bodyTemp);
        this.hasFins = hasFins;
    }

    //polymorphism
    descriptiveFeatures(){
       let des = `
           ${this.animalName}
           any of approximately 34,000 species of vertebrate animals (phylum Chordata) found in 
           the fresh and salt waters of the world. Living species range from the primitive jawless lampreys 
       `;

       return des;
    }




  swim(){
     console.log(`${this.animalName} is a ${this.bodyTemp} animals which swims with well developed fins(${this.hasFins})`);
  }

 

 
}
const  fish = new Fish("sharks", "coldBlooded", "presence")
// fish.swim()
//polymorphism method
// console.log(fish.descriptiveFeatures())


// fish.checkBackbone("presence");
// console.log(fish.descriptiveFeatures("Fish"))




//No 3
class Amphibian  extends Animal{

    constructor (animalName, bloodType){
        super(animalName, bloodType);
        
    }

    swim(){
         console.log(`${this.animalName} swims`)
    }
}
const amphibian = new Amphibian("frog", "cold-blooded", "moist skin")
// amphibian.swim()

//No 4
class Reptiles extends  Animal{
    constructor (animalName, bloodType, skeleton){
        super(animalName, bloodType);
        this.skeleton = skeleton
        
    }

    glide(){
        console.log(`${this.animalName} is a ${this.bloodType} animal which can glide`)
    }

    walk(){
        console.log(`${this.animalName} is a ${this.bloodType} animal which can walk`)
    }
}
const reptile = new Reptiles("tutortise", "cold-blooded")
// reptile.glide()

//No 5
class Aves extends Animal{
    constructor (animalName, bloodType, hasFeather){
        super(animalName, bloodType);
        this.hasFeather = hasFeather;
        
    }

    fly(){
       console.log(`${this.animalName} ${this.bloodType}  flies with feathers (${this.hasFeather})`)
    }

}
// const aves = new Aves("pigeons", "warm-blooded", "true")
// console.log(aves.fly())


//No 6
class Mammals extends Animal{

    constructor (animalName, bodyTemp, hasHairs){
        super(animalName, bodyTemp);
        this.hasHairs = hasHairs;
        
    }


    descriptiveFeatures(){
        let des = `
            ${this.animalName}
            (class Mammalia), any member of the group of vertebrate animals in which 
              the young are nourished with milk from special mammary glands of the mother. In addition to 
              these characteristic milk glands, mammals are distinguished by several other unique features.
              Hair is a typical mammalian feature, although in many whales it has disappeared except in the
             fetal stage. 
        `;
        return des;
    }

    hop(){
        console.log(`${this.animalName} a ${this.bodyTemp} animal hops`)   
    }


    run(){
        console.log(`${this.animalName} a ${this.bodyTemp} animal do run`)
    }

    walk(){
        console.log(`${this.animalName} a ${this.bodyTemp} animal can walk`)
    }

   
    actionPerformed(animal){
         switch(animal){
            case "rabbit": mammals.hop()
            break;  
            case "dog": mammals.run()
            break;
            case "cow": mammals.walk()
            default: console.log("doesn't hhave valid method here")
         } 
    }

   
}
//rabbit, dog ,cow can be passed in in the heritance instantances of => new Mammals 
const mammals = new Mammals("dog", "warm-blooded", "presence")
console.log(mammals.descriptiveFeatures())
console.log("end")
// console.log(mammals.actionPerformed(mammals.animalName))