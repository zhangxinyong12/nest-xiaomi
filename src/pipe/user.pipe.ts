import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UserPipe implements PipeTransform {
  constructor(private readonly schema) {

  }
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('user pipe', value);
    const { error } = this.schema.validate(value);
    console.log('userAdd validate error', error);
    if (error) {
      return {
        error
      };
    }
    return {
      name: 'xxxxxxxxxxxxxx'
    };
  }
}
