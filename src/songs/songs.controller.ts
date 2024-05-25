import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Post
  create() {
    return 'create a song endpoint';
  }
  @Get
  findAll() {
    return 'find all songs';
  }
  @Get(':id')
  findOne() {
    return 'fetch songs on the based on id';
  }
  @Put(':id')
  update() {
    return 'update songs on the based on id';
  }
  @Delete(':id')
  delete() {
    return 'delete songs on the based on id';
  }
}
