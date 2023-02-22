import { Button } from 'shared/ui';
import {useDispatch, useSelector} from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

interface CounterProps {
  className?: string
}

export const Counter = (props: CounterProps) => {
    const dispatch = useDispatch();
    const counterValue = useSelector((state: StateSchema) => state.counter.value);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    
    };
    return (
        <div>
            <Button  onClick={decrement}>decrement</Button>
            <h2>value = {counterValue}</h2>

            <Button onClick={increment}>increment</Button>
        </div>
    );
};
