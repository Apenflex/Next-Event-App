import mongoose from 'mongoose';

let cached = mongoose || { conn: null, promise: null}