import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

import redMinusImage from 'C:/Users/Marcus Nóbrega/ejtos-react_budget_app/src/images/red_minus.webp';
import greenPlusImage from 'C:/Users/Marcus Nóbrega/ejtos-react_budget_app/src/images/green_plus.png';

const ExpenseItem = (props) => {
    const { dispatch, budget } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const modifyAllocation = (name, amount) => {
        const newCost = props.cost + amount;

        if (newCost < 0) {
            // Alert the user if decreasing would exceed the remaining budget
            alert("You cannot reduce the budget value lower than the spending!");
            return;
        }

        const expense = {
            name: name,
            cost: amount,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    const imageStyle = {
        width: '20px',  // Set the desired width
        height: '20px', // Set the desired height
        border: 'none', // Remove the border or contour
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>£{props.cost}</td>
            <td>
                <button onClick={() => modifyAllocation(props.name, 10)}>
                    <img src={greenPlusImage} alt="Increase" style={imageStyle} />
                </button>
                <button onClick={() => modifyAllocation(props.name, -10)}>
                    <img src={redMinusImage} alt="Decrease" style={imageStyle} />
                </button>
            </td>
            <td>
                <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
            </td>
        </tr>
    );
};

export default ExpenseItem;
