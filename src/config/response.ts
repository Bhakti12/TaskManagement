import { Response } from 'express';

export const sendJSONResponse = (
    res: Response,
    message: string | null,
    metadata: any | null,
    data: any | null
  ) => {
    const response: any = {
      code: 200,
      status: 'OK',
      message,
      data
    };
  
    if (metadata) {
      response.metadata = metadata;
    }

    if (data) {
      response.data = data;
    }
  
    return res
      .status(200)
      .contentType('application/json;charset=utf-8')
      .send(JSON.stringify(response));
  };