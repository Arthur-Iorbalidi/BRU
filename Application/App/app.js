import API from "../services/API.js";

class App {
    api = new API();
    countPerPage = 20;

    dateValue = '';
    startDateValue = '';
    endtDateValue = '';

    isDateValid = false;
    isStartAndEndDateValid = false;

    init() {
        const search = document.querySelector('.search');
        search.addEventListener('click', this.search.bind(this));

        const grid = document.querySelector('.imgs_grid')
        grid.addEventListener('click', function(event) {
            if(event.target.closest('img')) {
                window.open(event.target.src, '_blank');
            }
        });

        document.querySelector('.inputDate').addEventListener('input', this.validationInputDate.bind(this));
        document.querySelector('.inputStartAndEndDate').addEventListener('input', this.validationInputStartAndEndDate.bind(this));

        this.getData({count: this.countPerPage});
    }

    ShowData(data) {
        const gallery = document.querySelector('.imgs_grid');
        if(Array.isArray(data)) {
            for(let i = 0; i < data.length; i++) {
                if (data[i].hasOwnProperty('url')) {
                    if(data[i].url.split('.').pop().length < 5) {
                        const img = document.createElement('img');
                        img.classList.add('img');
                        img.src = data[i].url;
                        img.alt = `image`;
                        gallery.append(img);
                    }
                }
            }
        }
        else {
            if (data.hasOwnProperty('url')) {
                if(data.url.split('.').pop().length < 5) {
                    const img = document.createElement('img');
                    img.classList.add('img');
                    img.src = data.url;
                    img.alt = `image`;
                    gallery.append(img);
                }
            }
        }
    }

    async getData(params) {
        const data = await this.api.get(params);
        this.ShowData(data);
    }

    DeleteImgs() {
        const imgs = document.querySelectorAll('img');
        for(let i = 0; i < imgs.length; i++) {
            imgs[i].remove();
        }
    }

    CrossVisible() {
        if(input.value != '') {
            BtnCross.classList.add('show');
        }
        else {
            BtnCross.classList.remove('show');
        }
    }

    search(event) {
        event.preventDefault();

        if(this.isDateValid) {
            this.DeleteImgs();
            this.getData({date: this.dateValue});
        }
        else if((this.isStartAndEndDateValid)) {
            this.DeleteImgs();
            this.getData({start_date: this.startDateValue, end_date: this.endtDateValue});
        }
        else {
            this.DeleteImgs();
            this.getData({count: this.countPerPage});
        }
    }

    validationInputDate(event) {
        const input = event.target;
        const value = this.formatInputDate(input.value);

        input.value = value;

        if(input.value !== '') {
            document.querySelector('.inputStartAndEndDate').disabled = true;
        }
        else {
            document.querySelector('.inputStartAndEndDate').disabled = false;
        }

        const isValidDate = this.validateDate(input.value);

        if (!isValidDate) {
            this.isDateValid = false;
        } else {
            this.isDateValid = true;
            this.dateValue = input.value;
        }
    }

    validationInputStartAndEndDate(event) {
        const input = event.target;
        const value = this.formatInputStartAndEndDate(input.value);

        input.value = value;

        if(input.value !== '') {
            document.querySelector('.inputDate').disabled = true;
        }
        else {
            document.querySelector('.inputDate').disabled = false;
        }

        const isValidDate = this.validateStartAndEndDate(input.value);

        if (!isValidDate) {
            this.isStartAndEndDateValid = false;
        } else {
            this.isStartAndEndDateValid = true;
            this.startDateValue = input.value.split('|')[0];
            this.endtDateValue = input.value.split('|')[1];
        }
    }

    formatInputDate(inputDate) {
        var formattedDate = inputDate.replace(/\D/g, "");
        formattedDate = formattedDate.slice(0, 8);
    
        if (formattedDate.length > 4) {
            formattedDate = formattedDate.slice(0, 4) + "-" + formattedDate.slice(4);
        }
        if (formattedDate.length > 7) {
            formattedDate = formattedDate.slice(0, 7) + "-" + formattedDate.slice(7);
        }
    
        return formattedDate;
    }

    formatInputStartAndEndDate(inputDate) {
        var formattedDate = inputDate.replace(/\D/g, "");
        formattedDate = formattedDate.slice(0, 16);
    
        if (formattedDate.length > 4) {
            formattedDate = formattedDate.slice(0, 4) + "-" + formattedDate.slice(4);
        }
        if (formattedDate.length > 7) {
            formattedDate = formattedDate.slice(0, 7) + "-" + formattedDate.slice(7);
        }
        if (formattedDate.length > 10) {
            formattedDate = formattedDate.slice(0, 10) + "|" + formattedDate.slice(10);
        }
        if (formattedDate.length > 15) {
            formattedDate = formattedDate.slice(0, 15) + "-" + formattedDate.slice(15);
        }
        if (formattedDate.length > 18) {
            formattedDate = formattedDate.slice(0, 18) + "-" + formattedDate.slice(18);
        }
    
        return formattedDate;
    }

    validateDate(inputDate) {
        var dateRegex = /^(\d{4})-(\d{2})-(\d{2})$/;
        return dateRegex.test(inputDate);
    }

    validateStartAndEndDate(inputDate) {
        var dateRegex = /^(\d{4})-(\d{2})-(\d{2})\|(\d{4})-(\d{2})-(\d{2})$/;
        return dateRegex.test(inputDate);
    }
}

export default App;