function step1() {
    return new Promise((resolve) => {
      setTimeout(function() {
        console.log("Step 1: Wash and soak 2 cups of basmati rice for 30 minutes. Drain and set aside.");
        document.getElementById('s1').innerHTML = ("Step 1: Wash and soak 2 cups of basmati rice for 30 minutes. Drain and set aside.");
        resolve();
      }, 1000);
    });
  }
  
  function step2() {
    return new Promise((resolve) => {
      setTimeout(function() {
        console.log("Step 2: In a large pot, heat 3 tablespoons of ghee (clarified butter) or oil. Add whole spices like cinnamon, cardamom, cloves, and bay leaves.");
        document.getElementById('s2').innerHTML =("Step 2: In a large pot, heat 3 tablespoons of ghee (clarified butter) or oil. Add whole spices like cinnamon, cardamom, cloves, and bay leaves.");
        resolve();
      }, 1200);
    });
  }
  
  function step3() {
    return new Promise((resolve) => {
      setTimeout(function() {
        console.log("Step 3: Saute sliced onions until golden brown. Add chopped tomatoes, ginger-garlic paste, and green chilies. Cook until tomatoes are soft.");
        document.getElementById('s3').innerHTML=("Step 3: Saute sliced onions until golden brown. Add chopped tomatoes, ginger-garlic paste, and green chilies. Cook until tomatoes are soft.");
        resolve();
      }, 1400);
    });
  }
  
  function step4() {
    return new Promise((resolve) => {
      setTimeout(function() {
        console.log("Step 4: Add chopped vegetables like carrots, peas, potatoes, and beans. Cook for a few minutes.");
        document.getElementById('s4').innerHTML=("Step 4: Add chopped vegetables like carrots, peas, potatoes, and beans. Cook for a few minutes.");
        resolve();
      }, 1600);
    });
  }
  
  function step5() {
    return new Promise((resolve) => {
      setTimeout(function() {
        console.log("Step 5: Mix in 1 cup of yogurt, 1 teaspoon of turmeric powder, 2 teaspoons of biryani masala, and salt to taste.");
        document.getElementById('s5').innerHTML=("Step 5: Mix in 1 cup of yogurt, 1 teaspoon of turmeric powder, 2 teaspoons of biryani masala, and salt to taste.");
        resolve();
      }, 1000);
    });
  }
  
  function step6() {
    return new Promise((resolve) => {
      setTimeout(function() {
        console.log("Step 6: Layer half of the vegetable mixture in the pot. Spread half of the soaked rice over it. Repeat the layers.");
        document.getElementById('s6').innerHTML=("Step 6: Layer half of the vegetable mixture in the pot. Spread half of the soaked rice over it. Repeat the layers.");
        resolve();
      }, 2000);
    });
  }
  
  function step7() {
    return new Promise((resolve) => {
      setTimeout(function() {
        console.log("Step 7: Sprinkle saffron strands soaked in warm milk over the rice for color and aroma.");
        document.getElementById('s7').innerHTML=("Step 7: Sprinkle saffron strands soaked in warm milk over the rice for color and aroma.");
        resolve();
      }, 1500);
    });
  }
  
  function step8() {
    return new Promise((resolve) => {
      setTimeout(function() {
        console.log("Step 8: Cover the pot with a tight-fitting lid and cook on low heat for 20-25 minutes until the rice is cooked and aromatic.");
        document.getElementById('s8').innerHTML=("Step 8: Cover the pot with a tight-fitting lid and cook on low heat for 20-25 minutes until the rice is cooked and aromatic.");
        resolve();
      }, 2000);
    });
  }

  function step9() {
    return new Promise((resolve) => {
      setTimeout(function() {
        console.log("Step 9: Once done, gently fluff the biryani with a fork, mixing the layers lightly.");
        document.getElementById('s9').innerHTML=("Step 9: Once done, gently fluff the biryani with a fork, mixing the layers lightly.");
        resolve();
      }, 2000);
    });
  }

  function step10() {
    return new Promise((resolve) => {
      setTimeout(function() {
        console.log("Step 10: Garnish with chopped coriander leaves, fried onions, and roasted cashews. Serve hot with raita.");
        document.getElementById('s10').innerHTML=("Step 10: Garnish with chopped coriander leaves, fried onions, and roasted cashews. Serve hot with raita.");
        console.log("Recipe complete!...Enjoy your delicious Vegetable Biryani!");
        document.getElementById('s11').innerHTML=("Recipe complete!...Enjoy your delicious Vegetable Biryani!");
        resolve();
      }, 2000);
    });
  }
  
  function cookRecipe() {
    step1()
      .then(step2)
      .then(step3)
      .then(step4)
      .then(step5)
      .then(step6)
      .then(step7)
      .then(step8)
      .then(step9)
      .then(step10)
      .then(() => {
        console.log("Recipe complete!");
      });
  }
  
  function displayOutput() {
    console.log("Starting the recipe...");
    document.getElementById('s0').innerHTML=("Starting the recipe...");
    cookRecipe();
}