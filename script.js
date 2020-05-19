class Calculator{
    constructor(previous, current) {
        this.previous = previous;
        this.current = current;
    }

    clear() {
        this.current = '';
        this.previous = '';
        this.operator = undefined;

    }

    delte() {

    }

    append(number) {
        if (number === '.' && this.current.includes('.')) return
        if (this.current.length > 0) {
            this.current = this.current.toString() + number.toString();
        } else {
            this.current = number.toString()
        }
        
    
    }

    operation(operation) {
        if(this.current === '')return
        if(this.previous !== '') {
            this.compute()
        }
        this.operator = operation;
        this.previous = this.current;
        this.current = ''
    }

    compute() {
        let computation 
        const prev =  parseFloat(this.previous)
        const curr = parseFloat(this.current)
        if(isNaN(prev) || isNaN(curr)) return
        switch (this.operator) {
            case '+':
                computation = prev + curr
                break;
            case '-':
                computation = prev - curr
                break;
            case 'x':
                computation = prev * curr
                break;
            case '÷':
                computation = prev / curr
                break;
            default: 
                return
        }
        this.current = computation;
        this.operator = undefinde;
        previous = ''
    }
    update() {
        currentText.innerText = this.current;
        previousText.innerText = this.previous;
        
    }
}





const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-del]')
const clearButton = document.querySelector('[data-clear]')
const previousText = document.querySelector('[data-previous]')
const currentText = document.querySelector('[data-current]')

const calculator = new Calculator(previousText, currentText)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.append(button.innerText)
        calculator.update()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.operation(button.innerText)
        calculator.update()
    })
})


equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.update();
})

clearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.update();
})