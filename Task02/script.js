
function step1(callback) {
    setTimeout(function () {
        console.log("Step 1: Wash and soak 2 cups of basmati rice for 30 minutes. Drain and set aside.");
        document.getElementById('s1').innerHTML = ("Step 1: Wash and soak 2 cups of basmati rice for 30 minutes. Drain and set aside.");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(function () {
        console.log("Step 2: In a large pot, heat 3 tablespoons of ghee (clarified butter) or oil. Add whole spices like cinnamon, cardamom, cloves, and bay leaves.");
        document.getElementById('s2').innerHTML =("Step 2: In a large pot, heat 3 tablespoons of ghee (clarified butter) or oil. Add whole spices like cinnamon, cardamom, cloves, and bay leaves.");
        callback();
    }, 1200);
}

function step3(callback) {
    setTimeout(function () {
        console.log("Step 3: Saute sliced onions until golden brown. Add chopped tomatoes, ginger-garlic paste, and green chilies. Cook until tomatoes are soft.");
        document.getElementById('s3').innerHTML=("Step 3: Saute sliced onions until golden brown. Add chopped tomatoes, ginger-garlic paste, and green chilies. Cook until tomatoes are soft.");
        callback();
    }, 1400);
}

function step4(callback) {
    setTimeout(function () {
        console.log("Step 4: Add chopped vegetables like carrots, peas, potatoes, and beans. Cook for a few minutes.");
        document.getElementById('s4').innerHTML=("Step 4: Add chopped vegetables like carrots, peas, potatoes, and beans. Cook for a few minutes.");
        callback();
    }, 1600);
}

function step5(callback) {
    setTimeout(function () {
        console.log("Step 5: Mix in 1 cup of yogurt, 1 teaspoon of turmeric powder, 2 teaspoons of biryani masala, and salt to taste.");
        document.getElementById('s5').innerHTML=("Step 5: Mix in 1 cup of yogurt, 1 teaspoon of turmeric powder, 2 teaspoons of biryani masala, and salt to taste.");
        callback();
    }, 1800);
}

function step6(callback) {
    setTimeout(function () {
        console.log("Step 6: Layer half of the vegetable mixture in the pot. Spread half of the soaked rice over it. Repeat the layers.");
        document.getElementById('s6').innerHTML=("Step 6: Layer half of the vegetable mixture in the pot. Spread half of the soaked rice over it. Repeat the layers.");
        callback();
    }, 2000);
}

function step7(callback) {
    setTimeout(function () {
        console.log("Step 7: Sprinkle saffron strands soaked in warm milk over the rice for color and aroma.");
        document.getElementById('s7').innerHTML=("Step 7: Sprinkle saffron strands soaked in warm milk over the rice for color and aroma.");
        callback();
    }, 2200);
}

function step8(callback) {
    setTimeout(function () {
        console.log("Step 8: Cover the pot with a tight-fitting lid and cook on low heat for 20-25 minutes until the rice is cooked and aromatic.");
        document.getElementById('s8').innerHTML=("Step 8: Cover the pot with a tight-fitting lid and cook on low heat for 20-25 minutes until the rice is cooked and aromatic.");
        callback();
    }, 2400);
}

function step9(callback) {
    setTimeout(function () {
        console.log("Step 9: Once done, gently fluff the biryani with a fork, mixing the layers lightly.");
        document.getElementById('s9').innerHTML=("Step 9: Once done, gently fluff the biryani with a fork, mixing the layers lightly.");
        callback();
    }, 2200);
}

function step10(callback) {
    setTimeout(function () {
        console.log("Step 10: Garnish with chopped coriander leaves, fried onions, and roasted cashews. Serve hot with raita.");
        document.getElementById('s10').innerHTML=("Step 10: Garnish with chopped coriander leaves, fried onions, and roasted cashews. Serve hot with raita.");
        console.log("Recipe complete!...Enjoy your delicious Vegetable Biryani!");
        document.getElementById('s11').innerHTML=("Recipe complete!...Enjoy your delicious Vegetable Biryani!");
    }, 2200);
}

function cookRecipe() {
    step1(function () {
        step2(function () {
            step3(function () {
                step4(function () {
                    step5(function () {
                        step6(function () {
                            step7(function () {
                                step8(function () {
                                    step9(function () {
                                        step10(function () {

                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}





function displayOutput() {
    console.log("Starting the recipe...");
    document.getElementById('s0').innerHTML=("Starting the recipe...");
    cookRecipe();
}