import { Controller, Get, Post, Param, ParseIntPipe, Query, UsePipes, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { JoiValidationPipe } from './shared/joi.pipe'
import { CreateAppDto } from './app.dto'
import { JoiSchema } from './shared/joi.schema'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * localhost:3000/11 -> OK
   * localhost:3000/aa -> NG
   */
  @Get(':id')
  getHello(@Param('id', new ParseIntPipe()) id: number): string {
    return this.appService.getHello();
  }

  /**
   * localhost:3000?id=11 -> OK
   * localhost:3000?id=aa -> NG
   */
  @Get()
  getHello1(@Query('id', ParseIntPipe) id: number): string {
    return this.appService.getHello();
  }

  @Post()
  @UsePipes(new JoiValidationPipe(JoiSchema))
  async create(@Body() createAppDto: CreateAppDto) {
    return 'OK'
  }
}
