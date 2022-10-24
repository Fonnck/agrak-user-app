import toast from 'react-hot-toast';
import { Toasty } from '../../interfaces';

export const ToastAlert = () => {


    function Toasty(bean: Toasty) {
        if (bean.type === "success") {
            toast.success(bean.message);
        } else if (bean.type === "error") {
            toast.error(bean.message);
        } else {
            toast(bean.message, { icon: "🔔" });
        }
    }

    return { Toasty }


}