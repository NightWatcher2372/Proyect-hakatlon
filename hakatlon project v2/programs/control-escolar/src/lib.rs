use anchor_lang::prelude::*;

declare_id!("FkWn3ickKbPr5V3CWDKgf4BABNmQ9Ep1cBbqWc2nGcNT");

#[program]
pub mod control_escolar {
    use super::*;

    pub fn crear_estudiante(ctx: Context<CrearEstudiante>, nombre: String) -> Result<()> {
        let est = &mut ctx.accounts.estudiante;
        est.nombre = nombre;
        est.activo = true;
        est.faltas = 0;
        est.promedio = 0;
        est.extraordinario = 0;
        Ok(())
    }

    pub fn cambiar_estatus(ctx: Context<ModificarEstudiante>, activo: bool) -> Result<()> {
        ctx.accounts.estudiante.activo = activo;
        Ok(())
    }

    pub fn registrar_falta(ctx: Context<ModificarEstudiante>) -> Result<()> {
        ctx.accounts.estudiante.faltas += 1;
        Ok(())
    }

    pub fn registrar_calificacion(ctx: Context<ModificarEstudiante>, cal: u8) -> Result<()> {
        ctx.accounts.estudiante.promedio = cal;
        Ok(())
    }

    pub fn registrar_extra(ctx: Context<ModificarEstudiante>, cal: u8) -> Result<()> {
        ctx.accounts.estudiante.extraordinario = cal;
        Ok(())
    }
}

#[account]
pub struct Estudiante {
    pub nombre: String,
    pub activo: bool,
    pub faltas: u8,
    pub promedio: u8,
    pub extraordinario: u8,
}

#[derive(Accounts)]
pub struct CrearEstudiante<'info> {
    #[account(init, payer = user, space = 300)]
    pub estudiante: Account<'info, Estudiante>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct ModificarEstudiante<'info> {
    #[account(mut)]
    pub estudiante: Account<'info, Estudiante>,
}