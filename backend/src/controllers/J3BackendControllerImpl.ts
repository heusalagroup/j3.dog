// Copyright (c) 2023. Heusala Group <info@heusalagroup.fi>. All rights reserved.

import {
    GetMapping,
    RequestHeader,
    RequestMapping,
} from "../fi/hg/core/Request";
import { ReadonlyJsonObject } from "../fi/hg/core/Json";
import { ResponseEntity } from "../fi/hg/core/request/ResponseEntity";
import { LogService } from "../fi/hg/core/LogService";
import { createErrorDTO, ErrorDTO } from "../fi/hg/core/types/ErrorDTO";
import { J3BackendController } from "./J3BackendController";
import { J3GridService } from "../services/J3GridService";

const LOG = LogService.createLogger('J3BackendController');

@RequestMapping("/")
export class J3BackendControllerImpl {

    private static _grid : J3GridService;

    public static setGridService (grid: J3GridService) {
        this._grid = grid;
    }

    @GetMapping("/")
    public static async getIndex (
        @RequestHeader('X-Authorization', {
            required: false,
            defaultValue: ''
        })
        token: string
    ): Promise<ResponseEntity<ReadonlyJsonObject | ErrorDTO>> {
        try {
            return ResponseEntity.ok({
                                         hello: 'world'
                                     } as unknown as ReadonlyJsonObject);
        } catch (err) {
            LOG.error(`ERROR: `, err);
            return ResponseEntity.internalServerError<ErrorDTO>().body(
                createErrorDTO('Internal Server Error')
            );
        }
    }

}
