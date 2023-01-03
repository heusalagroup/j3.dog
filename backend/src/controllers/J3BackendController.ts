// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { ResponseEntity } from "../fi/hg/core/request/ResponseEntity";
import { ReadonlyJsonObject } from "../fi/hg/core/Json";
import { ErrorDTO } from "../fi/hg/core/types/ErrorDTO";

/**
 * This is the interface, although it is not in use right now, since
 * the request service has a bug and instances do not work.
 */
export interface J3BackendController {

    getIndex (
        token: string
    ): Promise<ResponseEntity<ReadonlyJsonObject | ErrorDTO>>;
}
