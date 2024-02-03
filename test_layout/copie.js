// Code valable à factoriser


const columns = document.querySelectorAll('.column')


        let numberOfImagesInFifthColumn = 0
        let numberOfImagesInFourthColumn = 0
        let numberOfImagesInThirdColumn = 0
        let numberOfImagesInSecondColumn = 0

        let isResized = false
        let isResizedSecondBreakPoint = false
        let isResizedThirdBreakPoint = false
        let isResizedFourthBreakPoint = false

        const firstBreakPoint = 1866
        const secondBreakPoint = 1498
        const thirdBreakPoint = 1125
        const fourthBreakPoint = 757

        window.addEventListener('resize', () => {



                // FIRST BREAKPOINT - FIRST BREAKPOINT - FIRST BREAKPOINT - FIRST BREAKPOINT - FIRST BREAKPOINT - FIRST BREAKPOINT - 
                // FIRST BREAKPOINT - FIRST BREAKPOINT - FIRST BREAKPOINT - FIRST BREAKPOINT - FIRST BREAKPOINT - FIRST BREAKPOINT - 
                // FIRST BREAKPOINT - FIRST BREAKPOINT - FIRST BREAKPOINT - FIRST BREAKPOINT - FIRST BREAKPOINT - FIRST BREAKPOINT - 
                // FIRST BREAKPOINT - FIRST BREAKPOINT - FIRST BREAKPOINT - FIRST BREAKPOINT - FIRST BREAKPOINT - FIRST BREAKPOINT - 


                if (this.innerWidth <= firstBreakPoint && this.innerWidth > secondBreakPoint && !isResized) {
                        console.log('firstBreakPoint')

                        const lastColumn = columns.length - 1;
                        //Index de l'avant dernière colonne
                        const beforeLastColumnIndex = columns.length - 2
                        const numberOfImagesInLastColumn = columns[lastColumn].querySelectorAll('img').length
                        numberOfImagesInFifthColumn = numberOfImagesInLastColumn

                        // Démarre la boucle sur l'avant dernière colonne encore visible
                        let currentColumn = columns.length - 2
                        for (let j = 0; j < numberOfImagesInLastColumn; j++) {
                                // Revient sur la colonne précédent celle qui va être enlevée au resize 
                                currentColumn == -1 ? currentColumn = beforeLastColumnIndex : currentColumn
                                let image = columns[lastColumn].querySelector('img:first-child')
                                // Paramétrage d'un attribut permettant de définir la position de l'image dans sa colonne de départ sur desktop
                                image.setAttribute('first-breakpoint-position', j + 1)
                                // Ajoute l'image à la colonne
                                columns[currentColumn].appendChild(image)
                                currentColumn--

                        }

                        columns[lastColumn].style.display = "none";
                        isResized = true
                }
                // Si la fenêtre a été auparavant redimensionné en dessous du break point alors tu appliques la condition 
                // sinon ça veut dire que la fenêtre n'a pas été redimensionné en dessous du break point.
                if (this.innerWidth >= firstBreakPoint && isResized) {
                        const lastColumn = columns[columns.length - 1]

                        lastColumn.style.display = 'flex';
                        const beforeLastColumnIndex = columns.length - 2
                        // Démarre la boucle sur l'avant dernière colonne
                        let currentColumn = columns.length - 2
                        for (let i = 0; i < numberOfImagesInFifthColumn; i++) {
                                currentColumn == -1 ? currentColumn = beforeLastColumnIndex : currentColumn
                                let image = columns[currentColumn].querySelector('[first-breakpoint-position="' + (i + 1) + '"]')
                                lastColumn.appendChild(image)
                                currentColumn--

                        }

                        isResized = false
                }




                // SECOND BREAKPOINT - SECOND BREAKPOINT - SECOND BREAKPOINT - SECOND BREAKPOINT - SECOND BREAKPOINT -
                // SECOND BREAKPOINT - SECOND BREAKPOINT - SECOND BREAKPOINT - SECOND BREAKPOINT - SECOND BREAKPOINT -
                // SECOND BREAKPOINT - SECOND BREAKPOINT - SECOND BREAKPOINT - SECOND BREAKPOINT - SECOND BREAKPOINT -




                if (this.innerWidth <= secondBreakPoint && !isResizedSecondBreakPoint) {
                        console.log('secondBreakPoint')

                        const lastColumn = columns.length - 2;
                        //Index de l'avant dernière colonne
                        const beforeLastColumnIndex = columns.length - 3


                        const numberOfImagesInLastColumn = columns[lastColumn].querySelectorAll('img').length
                        numberOfImagesInFourthColumn = numberOfImagesInLastColumn
                        // Démarre la boucle sur l'avant dernière colonne encore visible
                        let currentColumn = columns.length - 3
                        for (let j = 0; j < numberOfImagesInLastColumn; j++) {
                                //revient sur la colonne précédent celle qui va être enlevée au resize 
                                currentColumn == -1 ? currentColumn = beforeLastColumnIndex : currentColumn
                                let image = columns[lastColumn].querySelector('img:first-child')
                                //Paramétrage d'un attribut permettant de définir la position de l'image dans sa colonne de départ sur desktop
                                image.setAttribute('second-breakpoint-position', j + 1)
                                //Ajoute l'image à la colonne
                                columns[currentColumn].appendChild(image)
                                currentColumn--

                        }
                        console.log(lastColumn);
                        columns[lastColumn].style.display = "none";
                        isResizedSecondBreakPoint = true
                }


                if (this.innerWidth >= secondBreakPoint && this.innerWidth <= firstBreakPoint && isResizedSecondBreakPoint) {

                        const lastColumn = columns[columns.length - 2];


                        lastColumn.style.display = 'flex';
                        // numberOfImagesInLastColumn garde en mémoire celui du précédent resize
                        const beforeLastColumnIndex = columns.length - 3

                        // Démarre la boucle sur l'avant dernière colonne
                        let currentColumn = columns.length - 3
                        for (let i = 0; i < numberOfImagesInFourthColumn; i++) {
                                currentColumn == -1 ? currentColumn = beforeLastColumnIndex : currentColumn
                                let image = columns[currentColumn].querySelector('[second-breakpoint-position="' + (i + 1) + '"]')
                                lastColumn.appendChild(image)
                                currentColumn--

                        }
                        isResizedSecondBreakPoint = false

                }





                // THIRD BREAKPOINT - THIRD BREAKPOINT - THIRD BREAKPOINT - THIRD BREAKPOINT - THIRD BREAKPOINT - THIRD BREAKPOINT -
                // THIRD BREAKPOINT - THIRD BREAKPOINT - THIRD BREAKPOINT - THIRD BREAKPOINT - THIRD BREAKPOINT - THIRD BREAKPOINT -
                // THIRD BREAKPOINT - THIRD BREAKPOINT - THIRD BREAKPOINT - THIRD BREAKPOINT - THIRD BREAKPOINT - THIRD BREAKPOINT -
                // THIRD BREAKPOINT - THIRD BREAKPOINT - THIRD BREAKPOINT - THIRD BREAKPOINT - THIRD BREAKPOINT - THIRD BREAKPOINT -




                if (this.innerWidth <= thirdBreakPoint && !isResizedThirdBreakPoint) {
                        console.log('thirdBreakPoint')
                        //3ème colonne (index 2)
                        const lastColumn = columns.length - 3;
                        //Index de l'avant dernière colonne
                        const beforeLastColumnIndex = columns.length - 4;
                        // Démarre la boucle sur l'avant dernière colonne
                        let currentColumn = columns.length - 4;
                        const numberOfImagesInLastColumn = columns[lastColumn].querySelectorAll("img").length;
                        numberOfImagesInThirdColumn = numberOfImagesInLastColumn

                        for (let j = 0; j < numberOfImagesInLastColumn; j++) {
                                //revient sur la colonne précédent celle qui va être enlevée au resize
                                currentColumn == -1 ? (currentColumn = beforeLastColumnIndex) : currentColumn;
                                let image = columns[lastColumn].querySelector("img:first-child");
                                //Paramétrage d'un attribut permettant de définir la position de l'image dans sa colonne de départ sur desktop
                                image.setAttribute("third-breakpoint-position", j + 1);
                                //Ajoute l'image à la colonne
                                columns[currentColumn].appendChild(image);
                                currentColumn--;
                        }

                        columns[lastColumn].style.display = "none";
                        isResizedThirdBreakPoint = true;
                }

                if (this.innerWidth >= thirdBreakPoint && this.innerWidth <= secondBreakPoint && isResizedThirdBreakPoint) {

                        const lastColumn = columns[columns.length - 3];
                        lastColumn.style.display = "flex";
                        // numberOfImagesInLastColumn garde en mémoire celui du précédent resize
                        const beforeLastColumnIndex = columns.length - 4;

                        // Démarre la boucle sur l'avant dernière colonne
                        let currentColumn = columns.length - 4;
                        for (let i = 0; i < numberOfImagesInThirdColumn; i++) {
                                currentColumn == -1 ? (currentColumn = beforeLastColumnIndex) : currentColumn;
                                let image = columns[currentColumn].querySelector('[third-breakpoint-position="' + (i + 1) + '"]');
                                lastColumn.appendChild(image);
                                currentColumn--;
                        }
                        isResizedThirdBreakPoint = false;
                }






                // FOURTH BREAKPOINT - FOURTH BREAKPOINT - FOURTH BREAKPOINT - FOURTH BREAKPOINT - FOURTH BREAKPOINT - FOURTH BREAKPOINT -
                // FOURTH BREAKPOINT - FOURTH BREAKPOINT - FOURTH BREAKPOINT - FOURTH BREAKPOINT - FOURTH BREAKPOINT - FOURTH BREAKPOINT -
                // FOURTH BREAKPOINT - FOURTH BREAKPOINT - FOURTH BREAKPOINT - FOURTH BREAKPOINT - FOURTH BREAKPOINT - FOURTH BREAKPOINT -
                // FOURTH BREAKPOINT - FOURTH BREAKPOINT - FOURTH BREAKPOINT - FOURTH BREAKPOINT - FOURTH BREAKPOINT - FOURTH BREAKPOINT -



                if (this.innerWidth <= fourthBreakPoint && !isResizedFourthBreakPoint) {
                        console.log('ici')
                        //2ème colonne (index 1)
                        const lastColumn = columns.length - 4;
                        //Index de l'avant dernière colonne
                        const beforeLastColumnIndex = columns.length - 5;
                        // Démarre la boucle sur l'avant dernière colonne
                        let currentColumn = columns.length - 5;
                        const numberOfImagesInLastColumn = columns[lastColumn].querySelectorAll("img").length;
                        numberOfImagesInSecondColumn = numberOfImagesInLastColumn
                        for (let j = 0; j < numberOfImagesInLastColumn; j++) {
                                //revient sur la colonne précédent celle qui va être enlevée au resize
                                currentColumn == -1 ? (currentColumn = beforeLastColumnIndex) : currentColumn;
                                let image = columns[lastColumn].querySelector("img:first-child");
                                //Paramétrage d'un attribut permettant de définir la position de l'image dans sa colonne de départ sur desktop
                                image.setAttribute("fourth-breakpoint-position", j + 1);
                                //Ajoute l'image à la colonne
                                columns[currentColumn].appendChild(image);
                                currentColumn--;
                        }

                        columns[lastColumn].style.display = "none";
                        isResizedFourthBreakPoint = true;
                }

                if (this.innerWidth >= fourthBreakPoint && this.innerWidth <= thirdBreakPoint && isResizedFourthBreakPoint) {
                        console.log('là')
                        const lastColumn = columns[columns.length - 4];
                        lastColumn.style.display = "flex";
                        const beforeLastColumnIndex = columns.length - 5;
                        // Démarre la boucle sur l'avant dernière colonne
                        let currentColumn = columns.length - 5;
                        for (let i = 0; i < numberOfImagesInSecondColumn; i++) {
                                currentColumn == -1 ? (currentColumn = beforeLastColumnIndex) : currentColumn;
                                let image = columns[currentColumn].querySelector('[fourth-breakpoint-position="' + (i + 1) + '"]');
                                lastColumn.appendChild(image);
                                currentColumn--;
                        }
                        isResizedFourthBreakPoint = false;
                }



        })

        function handleBreakpoint(columns, beforeLastIndex, lastColumnIndex, attributeSuffix, isResizedFlag) {
                const lastColumn = columns[lastColumnIndex];
                const beforeLastColumnIndex = beforeLastIndex;
                const numberOfImagesInLastColumn = lastColumn.querySelectorAll('img').length;

                for (let j = 0; j < numberOfImagesInLastColumn; j++) {
                        const currentColumnIndex = beforeLastIndex;

                        if (currentColumnIndex === -1) {
                                currentColumnIndex = beforeLastColumnIndex;
                        }

                        const image = lastColumn.querySelector('img:first-child');
                        image.setAttribute(attributeSuffix, j + 1);
                        columns[currentColumnIndex].appendChild(image);
                        beforeLastIndex--;
                }

                lastColumn.style.display = "none";
                isResizedFlag = true;
        }






        console.log(window.innerWidth);



        // Fenêtre entre 1498 et 1866 (sur 4 colonnes)
        //Si fenêtre inférieur à 1866 et supérieur à 1498
        if (window.innerWidth <= firstBreakPoint && window.innerWidth > secondBreakPoint) {
                console.log('firstBreakPoint')

                // handleBreakpoint(columns, beforeLastIndex, lastColumnIndex, attributeSuffix, isResizedFlag)

                // handleBreakpoint(columns, columns.length - 2, columns.length - 1, 'first-breakpoint-position', isResized);

                const lastColumn1 = columns.length - 1;
                //Index de l'avant dernière colonne
                const beforeLastColumnIndex1 = columns.length - 2
                const numberOfImagesInLastColumn1 = columns[lastColumn1].querySelectorAll('img').length
                numberOfImagesInFifthColumn = numberOfImagesInLastColumn1

                // Démarre la boucle sur l'avant dernière colonne encore visible
                let currentColumn1 = columns.length - 2
                for (let j = 0; j < numberOfImagesInFifthColumn; j++) {
                        // Revient sur la colonne précédent celle qui va être enlevée au resize 
                        currentColumn1 == -1 ? currentColumn1 = beforeLastColumnIndex1 : currentColumn1
                        let image1 = columns[lastColumn1].querySelector('img:first-child')
                        // Paramétrage d'un attribut permettant de définir la position de l'image dans sa colonne de départ sur desktop
                        image1.setAttribute('first-breakpoint-position', j + 1)
                        // Ajoute l'image à la colonne
                        columns[currentColumn1].appendChild(image1)
                        currentColumn1--

                }


                columns[lastColumn1].style.display = "none";
                isResized = true
        }

        //Fenêtre entre 1125 et 1498(sur 3 colonnes)
        // Si la fenêtre est supérieur à 1125 et inférieur à 1498
        if (window.innerWidth <= secondBreakPoint && window.innerWidth > thirdBreakPoint) {



                const lastColumn1 = columns.length - 1;
                //Index de l'avant dernière colonne
                const beforeLastColumnIndex1 = columns.length - 2
                const numberOfImagesInLastColumn1 = columns[lastColumn1].querySelectorAll('img').length
                numberOfImagesInFifthColumn = numberOfImagesInLastColumn1

                // Démarre la boucle sur l'avant dernière colonne encore visible
                let currentColumn1 = columns.length - 2
                for (let j = 0; j < numberOfImagesInFifthColumn; j++) {
                        // Revient sur la colonne précédent celle qui va être enlevée au resize 
                        currentColumn1 == -1 ? currentColumn1 = beforeLastColumnIndex1 : currentColumn1
                        let image1 = columns[lastColumn1].querySelector('img:first-child')
                        // Paramétrage d'un attribut permettant de définir la position de l'image dans sa colonne de départ sur desktop
                        image1.setAttribute('first-breakpoint-position', j + 1)
                        // Ajoute l'image à la colonne
                        columns[currentColumn1].appendChild(image1)
                        currentColumn1--

                }


                columns[lastColumn1].style.display = "none";
                isResized = true




                const lastColumn2 = columns.length - 2;
                //Index de l'avant dernière colonne
                const beforeLastColumnIndex2 = columns.length - 3
                const numberOfImagesInLastColumn2 = columns[lastColumn2].querySelectorAll('img').length
                numberOfImagesInFourthColumn = numberOfImagesInLastColumn2

                // Démarre la boucle sur l'avant dernière colonne encore visible
                let currentColumn2 = columns.length - 3
                for (let j = 0; j < numberOfImagesInFourthColumn; j++) {
                        // Revient sur la colonne précédent celle qui va être enlevée au resize 
                        currentColumn2 == -1 ? currentColumn2 = beforeLastColumnIndex2 : currentColumn2
                        let image2 = columns[lastColumn2].querySelector('img:first-child')
                        // Paramétrage d'un attribut permettant de définir la position de l'image dans sa colonne de départ sur desktop
                        image2.setAttribute('second-breakpoint-position', j + 1)
                        // Ajoute l'image à la colonne
                        columns[currentColumn2].appendChild(image2)
                        currentColumn2--

                }


                columns[lastColumn2].style.display = "none";
                isResizedSecondBreakPoint = true
                // handleBreakpoint(columns, columns.length - 2, columns.length - 1, 'first-breakpoint-position', isResized);
                // handleBreakpoint(columns, columns.length - 3, columns.length - 2, 'second-breakpoint-position', isResizedSecondBreakPoint);
        }


        //Fenêtre entre 757 et 1125 (sur 2 colonnes)
        // Si la fenêtre est inférieur à 1125 et supérieur à 757
        if (window.innerWidth <= thirdBreakPoint && window.innerWidth > fourthBreakPoint) {


                const lastColumn1 = columns.length - 1;
                //Index de l'avant dernière colonne
                const beforeLastColumnIndex1 = columns.length - 2
                const numberOfImagesInLastColumn1 = columns[lastColumn1].querySelectorAll('img').length
                numberOfImagesInFifthColumn = numberOfImagesInLastColumn1

                // Démarre la boucle sur l'avant dernière colonne encore visible
                let currentColumn1 = columns.length - 2
                for (let j = 0; j < numberOfImagesInFifthColumn; j++) {
                        // Revient sur la colonne précédent celle qui va être enlevée au resize 
                        currentColumn1 == -1 ? currentColumn1 = beforeLastColumnIndex1 : currentColumn1
                        let image1 = columns[lastColumn1].querySelector('img:first-child')
                        // Paramétrage d'un attribut permettant de définir la position de l'image dans sa colonne de départ sur desktop
                        image1.setAttribute('first-breakpoint-position', j + 1)
                        // Ajoute l'image à la colonne
                        columns[currentColumn1].appendChild(image1)
                        currentColumn1--

                }


                columns[lastColumn1].style.display = "none";
                isResized = true







                const lastColumn2 = columns.length - 2;
                //Index de l'avant dernière colonne
                const beforeLastColumnIndex2 = columns.length - 3
                const numberOfImagesInLastColumn2 = columns[lastColumn2].querySelectorAll('img').length
                numberOfImagesInFourthColumn = numberOfImagesInLastColumn2

                // Démarre la boucle sur l'avant dernière colonne encore visible
                let currentColumn2 = columns.length - 3
                for (let j = 0; j < numberOfImagesInFourthColumn; j++) {
                        // Revient sur la colonne précédent celle qui va être enlevée au resize 
                        currentColumn2 == -1 ? currentColumn2 = beforeLastColumnIndex2 : currentColumn2
                        let image2 = columns[lastColumn2].querySelector('img:first-child')
                        // Paramétrage d'un attribut permettant de définir la position de l'image dans sa colonne de départ sur desktop
                        image2.setAttribute('second-breakpoint-position', j + 1)
                        // Ajoute l'image à la colonne
                        columns[currentColumn2].appendChild(image2)
                        currentColumn2--

                }


                columns[lastColumn2].style.display = "none";
                isResizedSecondBreakPoint = true






                const lastColumn3 = columns.length - 3;
                //Index de l'avant dernière colonne
                const beforeLastColumnIndex3 = columns.length - 4
                const numberOfImagesInLastColumn3 = columns[lastColumn3].querySelectorAll('img').length
                numberOfImagesInThirdColumn = numberOfImagesInLastColumn3

                // Démarre la boucle sur l'avant dernière colonne encore visible
                let currentColumn3 = columns.length - 4
                for (let j = 0; j < numberOfImagesInThirdColumn; j++) {
                        // Revient sur la colonne précédent celle qui va être enlevée au resize 
                        currentColumn3 == -1 ? currentColumn3 = beforeLastColumnIndex3 : currentColumn3
                        let image3 = columns[lastColumn3].querySelector('img:first-child')
                        // Paramétrage d'un attribut permettant de définir la position de l'image dans sa colonne de départ sur desktop
                        image3.setAttribute('third-breakpoint-position', j + 1)
                        // Ajoute l'image à la colonne
                        columns[currentColumn3].appendChild(image3)
                        currentColumn3--

                }


                columns[lastColumn3].style.display = "none";
                isResizedThirdBreakPoint = true


                // handleBreakpoint(columns, columns.length - 2, columns.length - 1, 'first-breakpoint-position', isResized);
                // handleBreakpoint(columns, columns.length - 3, columns.length - 2, 'second-breakpoint-position', isResizedSecondBreakPoint);
                // handleBreakpoint(columns, columns.length - 4, columns.length - 3, 'third-breakpoint-position', isResizedThirdBreakPoint);

        }








        if (window.innerWidth <= fourthBreakPoint) {


                const lastColumn1 = columns.length - 1;
                //Index de l'avant dernière colonne
                const beforeLastColumnIndex1 = columns.length - 2
                const numberOfImagesInLastColumn1 = columns[lastColumn1].querySelectorAll('img').length
                numberOfImagesInFifthColumn = numberOfImagesInLastColumn1

                // Démarre la boucle sur l'avant dernière colonne encore visible
                let currentColumn1 = columns.length - 2
                for (let j = 0; j < numberOfImagesInFifthColumn; j++) {
                        // Revient sur la colonne précédent celle qui va être enlevée au resize 
                        currentColumn1 == -1 ? currentColumn1 = beforeLastColumnIndex1 : currentColumn1
                        let image1 = columns[lastColumn1].querySelector('img:first-child')
                        // Paramétrage d'un attribut permettant de définir la position de l'image dans sa colonne de départ sur desktop
                        image1.setAttribute('first-breakpoint-position', j + 1)
                        // Ajoute l'image à la colonne
                        columns[currentColumn1].appendChild(image1)
                        currentColumn1--

                }


                columns[lastColumn1].style.display = "none";
                isResized = true







                const lastColumn2 = columns.length - 2;
                //Index de l'avant dernière colonne
                const beforeLastColumnIndex2 = columns.length - 3
                const numberOfImagesInLastColumn2 = columns[lastColumn2].querySelectorAll('img').length
                numberOfImagesInFourthColumn = numberOfImagesInLastColumn2

                // Démarre la boucle sur l'avant dernière colonne encore visible
                let currentColumn2 = columns.length - 3
                for (let j = 0; j < numberOfImagesInFourthColumn; j++) {
                        // Revient sur la colonne précédent celle qui va être enlevée au resize 
                        currentColumn2 == -1 ? currentColumn2 = beforeLastColumnIndex2 : currentColumn2
                        let image2 = columns[lastColumn2].querySelector('img:first-child')
                        // Paramétrage d'un attribut permettant de définir la position de l'image dans sa colonne de départ sur desktop
                        image2.setAttribute('second-breakpoint-position', j + 1)
                        // Ajoute l'image à la colonne
                        columns[currentColumn2].appendChild(image2)
                        currentColumn2--

                }


                columns[lastColumn2].style.display = "none";
                isResizedSecondBreakPoint = true






                const lastColumn3 = columns.length - 3;
                //Index de l'avant dernière colonne
                const beforeLastColumnIndex3 = columns.length - 4
                const numberOfImagesInLastColumn3 = columns[lastColumn3].querySelectorAll('img').length
                numberOfImagesInThirdColumn = numberOfImagesInLastColumn3

                // Démarre la boucle sur l'avant dernière colonne encore visible
                let currentColumn3 = columns.length - 4
                for (let j = 0; j < numberOfImagesInThirdColumn; j++) {
                        // Revient sur la colonne précédent celle qui va être enlevée au resize 
                        currentColumn3 == -1 ? currentColumn3 = beforeLastColumnIndex3 : currentColumn3
                        let image3 = columns[lastColumn3].querySelector('img:first-child')
                        // Paramétrage d'un attribut permettant de définir la position de l'image dans sa colonne de départ sur desktop
                        image3.setAttribute('third-breakpoint-position', j + 1)
                        // Ajoute l'image à la colonne
                        columns[currentColumn3].appendChild(image3)
                        currentColumn3--

                }


                columns[lastColumn3].style.display = "none";
                isResizedThirdBreakPoint = true








                const lastColumn4 = columns.length - 4;
                //Index de l'avant dernière colonne
                const beforeLastColumnIndex4 = columns.length - 5
                const numberOfImagesInLastColumn4 = columns[lastColumn4].querySelectorAll('img').length
                numberOfImagesInSecondColumn = numberOfImagesInLastColumn4

                // Démarre la boucle sur l'avant dernière colonne encore visible
                let currentColumn4 = columns.length - 5
                for (let j = 0; j < numberOfImagesInSecondColumn; j++) {
                        // Revient sur la colonne précédent celle qui va être enlevée au resize 
                        currentColumn4 == -1 ? currentColumn4 = beforeLastColumnIndex4 : currentColumn4
                        let image4 = columns[lastColumn4].querySelector('img:first-child')
                        // Paramétrage d'un attribut permettant de définir la position de l'image dans sa colonne de départ sur desktop
                        image4.setAttribute('fourth-breakpoint-position', j + 1)
                        // Ajoute l'image à la colonne
                        columns[currentColumn4].appendChild(image4)
                        currentColumn4--

                }


                columns[lastColumn4].style.display = "none";
                isResizedFourthBreakPoint = true


                // handleBreakpoint(columns, columns.length - 2, columns.length - 1, 'first-breakpoint-position', isResized);
                // handleBreakpoint(columns, columns.length - 3, columns.length - 2, 'second-breakpoint-position', isResizedSecondBreakPoint);
                // handleBreakpoint(columns, columns.length - 4, columns.length - 3, 'third-breakpoint-position', isResizedThirdBreakPoint);

        }






        //Version factorisée


        const columns = document.querySelectorAll('.column')
        const firstBreakPoint = 1866
        const secondBreakPoint = 1498
        const thirdBreakPoint = 1125
        const fourthBreakPoint = 757

        let numberOfImagesInLastColumn = [] 
        let isResized = false
        let isResizedSecondBreakPoint = false
        let isResizedThirdBreakPoint = false
        let isResizedFourthBreakPoint = false



        function handleBreakpointShrink(lastColumnIndex, beforeLastIndex, attributeSuffix) {
                const lastColumn = columns[lastColumnIndex]
                const beforeLastColumnIndex = beforeLastIndex
                const imagesInLastColumn = lastColumn.querySelectorAll('img').length

                numberOfImagesInLastColumn.push(imagesInLastColumn)

                let currentColumnIndex = beforeLastIndex
                for (let j = 0; j < imagesInLastColumn; j++) {

                        if (currentColumnIndex === -1) {
                                currentColumnIndex = beforeLastColumnIndex
                        }

                        const image = lastColumn.querySelector('img:first-child')
                        image.setAttribute(attributeSuffix, j + 1)
                        columns[currentColumnIndex].appendChild(image)
                        currentColumnIndex--
                }

                lastColumn.style.display = "none"
                
        }

        function handleBreakpointExtend(lastColumnIndex, beforeLastIndex, attributeSuffix, numberOfImagesInLastColumn) {
                        
                        const lastColumn = columns[lastColumnIndex]
                        lastColumn.style.display = 'flex';
                        const beforeLastColumnIndex = beforeLastIndex
                        // Démarre la boucle sur l'avant dernière colonne
                        let currentColumn = beforeLastIndex

                        for (let i = 0; i < numberOfImagesInLastColumn; i++) {
                                currentColumn == -1 ? currentColumn = beforeLastColumnIndex : currentColumn
                                let image = columns[currentColumn].querySelector('[' + attributeSuffix + '="' + (i + 1) + '"]')
                                lastColumn.appendChild(image)
                                currentColumn--
                        }
        }

        function onResize() {

                // Premier breakpoint entre 1498px et 1866px
                if (this.innerWidth <= firstBreakPoint && this.innerWidth > secondBreakPoint && !isResized) {
                        handleBreakpointShrink(columns.length - 1, columns.length - 2,  'first-breakpoint-position')
                        isResized = true
                        window.removeEventListener('resize', onResize) 
                }
                window.addEventListener('resize', onResize)
                
                if (this.innerWidth >= firstBreakPoint && isResized) {
                        handleBreakpointExtend(columns.length - 1, columns.length - 2, 'first-breakpoint-position', numberOfImagesInLastColumn[0])
                        isResized = false
                }

                // Second breakpoint entre 1125px et 1498px
                if (this.innerWidth <= secondBreakPoint && !isResizedSecondBreakPoint) {
                        handleBreakpointShrink(columns.length - 2, columns.length - 3, 'second-breakpoint-position');
                        isResizedSecondBreakPoint = true
                        window.removeEventListener('resize', onResize) 
                }
                window.addEventListener('resize', onResize)

                if (this.innerWidth >= secondBreakPoint && this.innerWidth <= firstBreakPoint && isResizedSecondBreakPoint) {
                        handleBreakpointExtend(columns.length - 2, columns.length - 3, 'second-breakpoint-position', numberOfImagesInLastColumn[1])
                        isResizedSecondBreakPoint = false
                }

                // Troisième breakpoint entre 757px et 1125px
                if (this.innerWidth <= thirdBreakPoint && !isResizedThirdBreakPoint) {
                        handleBreakpointShrink(columns.length - 3, columns.length - 4, 'third-breakpoint-position');
                        isResizedThirdBreakPoint = true
                        window.removeEventListener('resize', onResize) 
                }
                window.addEventListener('resize', onResize)

                if (this.innerWidth >= thirdBreakPoint && this.innerWidth <= secondBreakPoint && isResizedThirdBreakPoint) {
                        handleBreakpointExtend(columns.length - 3, columns.length - 4, 'third-breakpoint-position', numberOfImagesInLastColumn[2])
                        isResizedThirdBreakPoint = false

                }


                // Troisième breakpoint moins de 757px
                if (this.innerWidth <= fourthBreakPoint && !isResizedFourthBreakPoint) {
                        handleBreakpointShrink(columns.length - 4, columns.length - 5, 'fourth-breakpoint-position');
                        isResizedFourthBreakPoint = true
                        window.removeEventListener('resize', onResize) 
                }
                window.addEventListener('resize', onResize)

                if (this.innerWidth >= fourthBreakPoint && this.innerWidth <= thirdBreakPoint && isResizedFourthBreakPoint) {
                        handleBreakpointExtend(columns.length - 4, columns.length - 5, 'fourth-breakpoint-position', numberOfImagesInLastColumn[3])
                        isResizedFourthBreakPoint = false
                }
        }

        window.addEventListener('resize', onResize);



        // Fenêtre entre 1498 et 1866 (sur 4 colonnes)
        //Si fenêtre inférieur à 1866 et supérieur à 1498
        if (window.innerWidth <= firstBreakPoint && window.innerWidth > secondBreakPoint) {
                handleBreakpointShrink(columns.length - 1, columns.length - 2,  'first-breakpoint-position')
                isResized = true
                window.removeEventListener('resize', onResize) 
        }
        window.addEventListener('resize', onResize)

        //Fenêtre entre 1125 et 1498(sur 3 colonnes)
        // Si la fenêtre est supérieur à 1125 et inférieur à 1498
        if (window.innerWidth <= secondBreakPoint && window.innerWidth > thirdBreakPoint) {
                handleBreakpointShrink(columns.length - 1, columns.length - 2,  'first-breakpoint-position')
                isResized = true
                handleBreakpointShrink(columns.length - 2, columns.length - 3, 'second-breakpoint-position');
                isResizedSecondBreakPoint = true
                window.removeEventListener('resize', onResize) 
        }
        window.addEventListener('resize', onResize)

        //Fenêtre entre 757 et 1125 (sur 2 colonnes)
        // Si la fenêtre est inférieur à 1125 et supérieur à 757
        if (window.innerWidth <= thirdBreakPoint && window.innerWidth > fourthBreakPoint) {
                handleBreakpointShrink(columns.length - 1, columns.length - 2,  'first-breakpoint-position')
                isResized = true
                handleBreakpointShrink(columns.length - 2, columns.length - 3, 'second-breakpoint-position');
                isResizedSecondBreakPoint = true
                handleBreakpointShrink(columns.length - 3, columns.length - 4, 'third-breakpoint-position');
                isResizedThirdBreakPoint = true
                window.removeEventListener('resize', onResize) 

        }
        window.addEventListener('resize', onResize)

        if (window.innerWidth <= fourthBreakPoint) {
                handleBreakpointShrink(columns.length - 1, columns.length - 2,  'first-breakpoint-position')
                isResized = true
                handleBreakpointShrink(columns.length - 2, columns.length - 3, 'second-breakpoint-position');
                isResizedSecondBreakPoint = true
                handleBreakpointShrink(columns.length - 3, columns.length - 4, 'third-breakpoint-position');
                isResizedThirdBreakPoint = true
                handleBreakpointShrink(columns.length - 4, columns.length - 5, 'fourth-breakpoint-position');
                isResizedFourthBreakPoint = true
                window.removeEventListener('resize', onResize) 
        }
        window.addEventListener('resize', onResize)


</script>

