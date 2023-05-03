    const serviceList = document.querySelector('.services__list');
    const button = document.querySelector('.control__button');
    const servicesItems = serviceList.querySelectorAll('.services__item');
    const paginationNumber = document.querySelector('.pagination__number');
    const paginationNumberLastPage = document.querySelector('.pagination__number--last-page');
    const paginationScroll = document.querySelector('.pagination__scroll');

    let i = 1;
    let j = 0;

    const onButtonClick = () => {
      if (i < 3) {
        servicesItems.forEach(element => {
          if (element.classList.contains('services__item--current')) {
            element.classList.remove('services__item--current');
          }
        });

        if (parseInt(paginationNumber.textContent) < parseInt(3)) {
          paginationNumber.textContent = '0' + (parseInt(paginationNumber.textContent) + 1);
        }

        j += 42;
        paginationScroll.style.setProperty('margin-top', `${j}px`);

        serviceList.append(serviceList.children[0]);
        serviceList.firstElementChild.classList.add('services__item--current');
      } else {
        button.removeEventListener('click', onButtonClick);
      }
      i++;
    }

    button.addEventListener('click', onButtonClick);
