import { configureStore } from '@reduxjs/toolkit'
import isLoading from './slices/isLoading.slice'
import toast from './slices/toast.slice'

export default configureStore({
    reducer: {
        isLoading,
        toast
    }
})
