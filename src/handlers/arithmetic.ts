import { Request, Response } from 'express'
import { BaseHandler } from '../interfaces'


class Arithmetic extends BaseHandler {

    static processEntries(req: Request, res: Response) {

        const { operation_type, x, y } = req.body

        if (!operation_type || !x || !y) return res.send({ 'message': 'Please fill out the entire fields' })
        if (isNaN(x) == true || isNaN(y) == true) res.send({ 'message': 'Please confirm you have entered numbers for both x, and y' })

        let firstValue = x
        let secondValue = y
        let operator;
        let operation = operation_type
        let result = 0;

        switch (operation_type) {
            case 'addition':
                operator = '+'
                break;
            case 'subtraction':
                operator = '-'
                break;
            case 'multiplication':
                operator = '*'
                break;
            default:
                break;
        }

        if (operation_type.split(" ").length > 1) { 

            const splitWords = operation_type.split(" ")

            const getOperator = (splitWords: string | string[]) => {
                let operator = ''
                if (splitWords.includes('add') || splitWords.includes('addition')) { operator = '+' }
                if (splitWords.includes('subtract') || splitWords.includes('addition')) { operator = '-' }
                if (splitWords.includes('multiply') || splitWords.includes('subtraction')) { operator = '*' }
                return operator
            }

            const getValues = splitWords.filter((element: number) => {
                return isNaN(element) == false
            })

            const [getFirstValue, getSecondValue] = getValues
            firstValue = getFirstValue
            secondValue = getSecondValue
            operator = getOperator(operation_type.split(" "))

            switch (operator) {
                case '+':
                    operation = 'addition'
                    break;
                case '-':
                    operation = 'subtraction'
                    break;
                case '*':
                    operation = 'multiplication'
                    break;

                default:
                    break;
            }

        }

        result = eval(`${firstValue} ${operator} ${secondValue}`)

        res.status(200).send(
            {
                "slackUsername": 'Jossy',
                "result": result,
                "operation_type": operation
            }
        )

    }

}

export default Arithmetic