import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { createUserDefaultModel } from "./User"

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  user: createUserDefaultModel(),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
