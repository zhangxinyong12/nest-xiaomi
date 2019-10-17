import { Injectable } from '@nestjs/common';
import { join } from 'path';
import { createWriteStream } from 'fs'
@Injectable()
export class SaveService {
    save(file) {
        const writeFile = createWriteStream(join(__dirname, '..', '../../public/upload', `${Date.now()}-${file.originalname}`));
        writeFile.write(file.buffer);
    }
}
