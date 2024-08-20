import { Injectable } from '@nestjs/common';
import { MessagesRepoistory } from './messages.repository';


@Injectable()
export class MessagesService {
  constructor( public messagesRepo: MessagesRepoistory) {}

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
