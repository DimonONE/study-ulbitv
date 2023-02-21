import { FC, MouseEvent, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    isOpen: boolean
    onClosed?: () => void
    className?: string
    children?: ReactNode
}

const ANIMATE_DELAY = 200;

export const Modal: FC<ModalProps> = (props) => {
    const {isOpen, onClosed,  className, children} = props;

    const [isClosing, setClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const onContentClick = (event: MouseEvent) => {
        event.stopPropagation();
    };

    const handleClose = useCallback(
        () => {
            if(onClosed) {
                setClosing(true);
                timerRef.current = setTimeout(() => {
                    onClosed();
                    setClosing(false);
                }, ANIMATE_DELAY);
            }
        }, [onClosed]
    );

    const onKeyDown = useCallback(
        (event: globalThis.KeyboardEvent) => {
            if(event.key === 'Escape') {
                handleClose();
            }
        }, [handleClose]
    );

    useEffect(() => {
        if(isOpen) {
            window.addEventListener('keydown',  onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    };
    
    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className])}>
                <span className={cls.overlay} onClick={handleClose}>
                    <span className={cls.content} onClick={onContentClick}>
                        {children}
                    </span>
                </span>
            </div>
        </Portal>
    );
};
