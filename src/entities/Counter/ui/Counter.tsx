import { Button } from 'shared/ui';
import {useDispatch, useSelector} from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Counter.module.scss';

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
        <div className={classNames(cls.counter)}>
            <Button theme={ButtonTheme.BACKGROUND} data-testid='count-decrement' onClick={decrement}>-</Button>
            <h2 className={cls.value} data-testid='count-value'>{counterValue}</h2>
            <Button theme={ButtonTheme.BACKGROUND} data-testid='count-increment' onClick={increment}>+</Button>
        </div>
    );
};
