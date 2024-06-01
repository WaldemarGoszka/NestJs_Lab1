import { SongsService } from './songs.service';
import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService)
  @Post()
  create() {
    return this.songsService.create('Animal by Martin Garrix');
  }
  @Get()
  findAll() {
    return this.songsService.findAll();
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
