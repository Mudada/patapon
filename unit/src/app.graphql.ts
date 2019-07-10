
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface Patapon {
    id: number;
    job: string;
}

export interface IQuery {
    patapon(id: number): Patapon | Promise<Patapon>;
    patapons(): Patapon[] | Promise<Patapon[]>;
}
