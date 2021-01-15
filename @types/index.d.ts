// 1. Make sure to import 'vue' before declaring augmented types
import { SweetAlertResult } from "sweetalert2";

declare module "vue/types/vue" {
    interface Vue {
        $swal(title: string, message: string, icon: "success" | "error" | "warning" | "info" | "question"): Promise<SweetAlertResult>;
    }
}