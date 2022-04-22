import books from "../models/Books"

const mysort = {createdAt:-1}
export const list = async(req,res) => {
    try {
        const book = await books.find().limit(20).sort(mysort).exec()
        res.json(book)
    } catch (error) {
        res.status(400).json({message:"khong tìm thấy data"})
    }
}
export const Detail = async (req,res) => {
    try {
        const book = await books.findOne({_id:req.params.id}).exec()
        res.json(book)
    } catch (error) {
        res.status(400).json({message:"khong tìm thấy data"})
        
    }
}
export const create = async (req,res) => {
    try {
        const book = await books(req.body).save()
        res.json(book)
    } catch (error) {
        res.status(400).json({message:"khong thêm được data"})
    }
}
export const remove = async (req,res) => {
    try {
        const book = await books.findOneAndDelete({_id:req.params.id}).exec()
        res.json(book)

    } catch (error) {
        res.status(400).json({message:"khong xóa được data"})
        
    }
}
export const update = async (req,res) => {
    try {
        const book = await books.findOneAndUpdate({_id:req.params.id},req.body,{new:true}).sort(mysort).exec()
        res.json(book)
    } catch (error) {
        res.status(400).json({message:"khong sửa được data"})
        
    }
}