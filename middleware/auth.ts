import state from "@/state";
import { Context } from "@nuxt/types";
export default ({ redirect }: Context) => state.token || redirect("/auth/login");